import styled from "styled-components";

const ActionCardView = styled.div`
  width: 300px;
  height: 125px;
  border-radius: 16px;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const CourseText = styled.span`
  font-size: 12px;
`;

const AToB = styled.span`
  font-size: 24px;
  display: flex;
  gap: 6px;
`;

const Arrow = styled.span`
  font-size: 24px;
  display: inline-block;
  transform: scale(0.95, 1);
  line-height: 12px;
`;
const Change = styled.span`
  font-size: 12px;
  line-height: 12px;
  margin-left: -2px;
  color: #007e00;
`;
const ArrowChange = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -1px;
`;

const AssignmentBInfo = styled.span`
  font-size: 12px;
`;

const AssignmentName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export interface ActionCardType {
    course: String;
    courseAvgA: number;
    courseAvgB: number;
    assignmentName: string;
    assignmentGradeB: number;
}

export default function ActionCard({
  course,
  courseAvgA,
  courseAvgB,
  assignmentName,
  assignmentGradeB,
}: ActionCardType) {
  return (
    <ActionCardView>
      <CourseText>{course}</CourseText>
      <AToB>
        <b>
          {courseAvgA.toLocaleString("en-us", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
        </b>
        <ArrowChange>
          <Change>
            +
            {(courseAvgB - courseAvgA).toLocaleString("en-us", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </Change>
          <Arrow>⟶</Arrow>
        </ArrowChange>
        <b>
          {courseAvgB.toLocaleString("en-us", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
        </b>
      </AToB>
      <AssignmentName>{assignmentName}</AssignmentName>
      <AssignmentBInfo>(if made up to {assignmentGradeB})</AssignmentBInfo>
    </ActionCardView>
  );
}
