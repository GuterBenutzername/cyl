import styled from "styled-components";
import GPA from "./gpa";
import ActionCard, { ActionCardType } from "./actionCard";
import CourseView from "./courseView";

const GPALayout = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

const DashboardMargin = styled.div`
  position: relative;
  margin: 4px;
`;

const LastAutoUpdated = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  color: #888;
`;

const Courses = styled.div`
width: 300px;`

function UnnecessarilyComplexRandomGPAFactory() {
  const x = Math.random() * 10;
  // unnecessarily complex formula to mostly generate GPAs in the 3-4 range with occasional outliers.
  return 0.0168 * x ** 3 + -0.2773 * x ** 2 + 1.5919 * x - 0.125874;
}

export default function Dashboard({
  premium,
  actions,
  courses
}: {
  premium: boolean;
  actions: ActionCardType[];
  courses: {name: string, grade: number}[];
}) {
  const GPAValue = UnnecessarilyComplexRandomGPAFactory();
  const GPAGoal = 4.0;
  return (
    <DashboardMargin>
      <div id="feed">
        {premium && (
          <div id="actions">
            <h2>Actions</h2>
            {actions.length > 0 ? (
              <div>
                {actions.map((value: ActionCardType) => {
                  return (
                    <ActionCard
                      course={value.course}
                      courseAvgA={value.courseAvgA}
                      courseAvgB={value.courseAvgB}
                      assignmentName={value.assignmentName}
                      assignmentGradeB={value.assignmentGradeB}
                    />
                  );
                })}
              </div>
            ) : (
              <div>There's nothing here!</div>
            )}
          </div>
        )}
        <Courses id="courses">
          <h2>Courses</h2>
          {courses.length > 0 ? (
              <div>
                {courses.map((value) => {
                  return (
                    <CourseView
                      name={value.name}
                      grade={value.grade}
                    />
                  );
                })}
              </div>
            ) : (
              <div>There's nothing here!</div>
            )}
        </Courses>
      </div>
      <GPALayout id="gpa">
        <GPA gpa={GPAValue} goal={GPAGoal} />
      </GPALayout>
      {premium && (
        <LastAutoUpdated id="updated">auto-updated yesterday</LastAutoUpdated>
      )}
    </DashboardMargin>
  );
}
