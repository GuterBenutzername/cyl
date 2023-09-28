from flask import Flask, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)
api = Api(app)

class User(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    courses = db.relationship('Course', backref='user', lazy=True)

class Course(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    assignments = db.relationship('Assignment', backref='course', lazy=True)

class Assignment(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    grade = db.Column(db.Float, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    future = db.Column(db.Boolean, default=False, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

app.app_context().push()
db.create_all()

class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user is None:
            return {'error': 'user not found'}, 404
        return {
            'id': user.id,
            'name': user.name,
            'courses': [obj.id for obj in user.courses]
        }

    def put(self, user_id):
        user = User.query.get(user_id)
        if user is None:
            return {'error': 'user not found'}, 404

        user_data = request.get_json()
        user.name = user_data.get('name', user.name)
        db.session.commit()
        return {"msg": "User updated", "User": user_data}, 200

class CreateUserResource(Resource):
    def post(self):
        user_data = request.get_json()
        planned_id = str(uuid.uuid4())
        user = User(
            id=planned_id, 
            name=user_data.get('name'),
        )
        db.session.add(user)
        db.session.commit()
        return {"msg": "User created", "User": user_data, "ID": planned_id}, 201


class CourseResource(Resource):
    def get(self, course_id):
        course = Course.query.get(course_id)
        if course is None:
            return {'error': 'course not found'}, 404
        return {
            'id': course.id,
            'name': course.name,
            'assignments': [obj.id for obj in course.assignments],
            'user_id': course.user_id
        }

    def put(self, course_id):
        course = Course.query.get(course_id)
        if course is None:
            return {'error': 'course not found'}, 404

        course_data = request.get_json()
        course.name = course_data.get('name', course.name)
        course.user_id = course_data.get('user_id', course.user_id)
        db.session.commit()
        return {"msg": "Course updated", "Course": course_data}, 200

class CreateCourseResource(Resource):
    def post(self):
        course_data = request.get_json()
        course = Course(
            id=str(uuid.uuid4()), 
            name=course_data.get('name'),
            user_id=course_data.get('user_id')
        )
        db.session.add(course)
        db.session.commit()
        return {"msg": "Course created", "Course": course_data}, 201


class AssignmentResource(Resource):
    def get(self, assignment_id):
        assignment = Assignment.query.get(assignment_id)
        if assignment is None:
            return {'error': 'assignment not found'}, 404
        return {
            'id': assignment.id,
            'name': assignment.name,
            'grade': assignment.grade,
            'weight': assignment.weight,
            'future': assignment.future,
            'course_id': assignment.course_id
        }

    def put(self, assignment_id):
        assignment = Assignment.query.get(assignment_id)
        if assignment is None:
            return {'error': 'assignment not found'}, 404

        assignment_data = request.get_json()
        assignment.name = assignment_data.get('name', assignment.name)
        assignment.grade = assignment_data.get('grade', assignment.grade)
        assignment.weight = assignment_data.get('weight', assignment.weight)
        assignment.future = assignment_data.get('future', assignment.future)
        assignment.course_id = assignment_data.get('course_id', assignment.course_id)
        # Adjust this according to your Assignment model.
        db.session.commit()
        return {"msg": "Assignment updated", "Assignment": assignment_data}, 200

class CreateAssignmentResource(Resource):
    def post(self):
        assignment_data = request.get_json()
        assignment = Assignment(
            id=str(uuid.uuid4()), 
            name=assignment_data.get('name'),
            grade=assignment_data.get('grade'),
            weight=assignment_data.get('weight'),
            future=assignment_data.get('future'),
            course_id=assignment_data.get('course_id')
            # Add all other fields from your Assignment model.
        )
        db.session.add(assignment)
        db.session.commit()
        return {"msg": "Assignment created", "Assignment": assignment_data}, 201


api.add_resource(UserResource, '/users/<string:user_id>')
api.add_resource(CreateUserResource, '/users')
api.add_resource(CourseResource, '/courses/<string:course_id>')
api.add_resource(CreateCourseResource, '/courses')
api.add_resource(AssignmentResource, '/assignments/<string:assignment_id>')
api.add_resource(CreateAssignmentResource, '/assignments')

if __name__ == '__main__':
    app.run(debug=True)