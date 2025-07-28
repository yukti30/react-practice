import "../assets/styles/ListGroup.css";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";

const ListItem = styled.li`
  list-style: none;
`;
const ListGroup = () => {
  const items = ["Lucknow", "Mumbai", "Bengaluru", "Ahemdabad"];
  return (
    <>
      <AiFillLike />
      <h1>Capitals</h1>
      {items.map((item) => (
        <ListItem> {item}</ListItem>
      ))}
    </>
  );
};

export default ListGroup;
