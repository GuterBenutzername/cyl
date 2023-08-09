import styled from "styled-components";

const CourseViewBorder = styled.div`
  border: 1px solid #aaa;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
`;

export default function CourseView({name, grade}: {name: string, grade: number}) {
  return (
    <CourseViewBorder>
      <span>{name}</span>
      <span>{grade}</span>
    </CourseViewBorder>
  );
}
