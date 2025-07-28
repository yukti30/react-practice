import { useState } from "react";
import Modal from "./components/Modal";
import styled from "styled-components";

function App() {
  const [modal, setShowModal] = useState(false);
  return (
    <>
      {modal && (
        <>
          <Backdrop onClick={() => setShowModal(false)} />
          <Modal title="Delete">
            <Container>
              <p>Are you sure you want to delete this file?</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </Container>
          </Modal>
        </>
      )}
      <Button>
        {!modal && (
          <button onClick={() => setShowModal(true)}>Show Modal</button>
        )}
      </Button>
    </>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  .btn-close {
    border: 2px solid black;
    cursor: pointer;
  }
`;
const Button = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
