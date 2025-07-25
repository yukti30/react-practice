// import { useState } from "react";
// import Alert from "./componenets/Alert";

import ListGroup from "./componenets/ListGroup";

// import Button from "./componenets/Button";

function App() {
  return (
    <>
      <ListGroup />
    </>
  );
  //Exercise2
  // const [alertbox, setAlertbox] = useState(false);
  // const handleClick = () => {
  //   setAlertbox(false);
  // };
  // return (
  //   <>
  //     {alertbox && (
  //       <Alert text="Hello Yukti" onClick={() => handleClick()}></Alert>
  //     )}
  //     <Button
  //       color={"success"}
  //       text={"Press Me"}
  //       onClick={() => setAlertbox(true)}
  //     ></Button>
  //   </>
  // );
  //Exercise1
  // return (
  //   <>
  //
  //     <Alert>Hello Ms Yukti</Alert>
  //   </>
  // );
}

export default App;
