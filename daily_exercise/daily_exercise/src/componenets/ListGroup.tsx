import styles from "../assets/styles/ListGroup.module.css";
const ListGroup = () => {
  const items = ["Lucknow", "Mumbai", "Bengaluru", "Ahemdabad"];
  return (
    <>
      <h1>Capitals</h1>
      {items.map((item, index) => (
        <li className={[styles.listGroup, styles.container].join(" ")}>
          {" "}
          {item}
        </li>
      ))}
    </>
  );
};

export default ListGroup;
