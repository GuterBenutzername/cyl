import styled from "styled-components";

const Circle = styled.div<{$gpa: number, $goal:number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#88d0c0 ${props => ((props.$gpa / props.$goal)*100)}%, #88d0c568 0);
  transition: background 1s ease;
`;

const Circle2 = styled(Circle)`
  width: 77px;
  height: 77px;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#5ba394 ${props => (((props.$gpa / props.$goal)*100)-100)}%, transparent 0);
`;

export default function GPA({ gpa, goal }: { gpa: number; goal: number }) {
  return (
    <div style={{ position: "relative" }}>
      <Circle $gpa={gpa} $goal={goal}>
      <Circle2 $gpa={gpa} $goal={goal}>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "65%",
              height: "14px",
              lineHeight: "14px",
            }}
          >
            GPA:
          </span>
          <b style={{ height: "16px", lineHeight: "16px" }}>
            {gpa.toLocaleString("en-US", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 2,
            })}
          </b>
        </span>
      </Circle2>
      </Circle>
    </div>
  );
}
