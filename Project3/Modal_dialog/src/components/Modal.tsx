import type { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: ReactNode;
}
const Modal = ({ title, children }: Props) => {
  return (
    <>
      <Container>
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="content">{children}</div>
      </Container>
    </>
  );
};

export default Modal;

const Container = styled.div`
  width: 300px;
  background-color: red;
  border-bottom: 2px solid black;
  .title {
    border: 2px solid black;
  }
`;
