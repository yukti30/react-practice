import type { ReactNode } from "react";
import { styled } from "styled-components";

interface Props {
  title: string;
  children: ReactNode;
  onClick: () => void;
}
const NotificationCard = ({ title, children, onClick }: Props) => {
  return (
    <>
      <Container>
        <div className="title">{title}</div>
        <div className="content">
          {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onClick}
          ></button>
        </div>
      </Container>
    </>
  );
};

export default NotificationCard;

const Container = styled.div`
  border: 2px solid black;
  width: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  .title {
    color: blue;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .btn-close {
    border: 2px solid black;
  }
`;
