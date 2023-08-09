import styled from "styled-components";
import GPA from "./gpa";

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

function UnnecessarilyComplexRandomGPAFactory() {
  const x = Math.random() * 10;
  // unnecessarily complex formula to mostly generate GPAs in the 3-4 range with occasional outliers.
  return 0.0168 * x ** 3 + -0.2773 * x ** 2 + 1.5919 * x - 0.125874;
}

export default function Dashboard({ premium }: { premium: boolean }) {
  const GPAValue = UnnecessarilyComplexRandomGPAFactory();
  const GPAGoal = 4.0;
  return (
    <DashboardMargin>
      <div id="feed">
        {premium && (
          <div id="actions">
            <h2>Actions</h2>
            There's nothing here!
          </div>
        )}
        <div id="courses">
          <h2>Courses</h2>
          There's nothing here!
        </div>
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
