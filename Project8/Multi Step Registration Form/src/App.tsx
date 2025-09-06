// import { useState } from "react";
import AddressDetails from "./components/AddressDetails";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Skills from "./components/Skills";
import styled from "styled-components";
// import Sumary from "./components/Sumary";

function App() {
  const [currentpage, setCurrentPage] = useState(0);
  const [userData, setUserData] = useState({});
  const user = {
    name: "yukti",
    email: "yuktigupta2012@gmail.com",
    age: 25,
    flatno: "1d402",
    street: "Brookefield main rd",
    city: "Bengaluru",
    zip: 772076,
    skillset: ["html", "css"],
  };
  const handleNextButton = (id: number) => {
    setCurrentPage(id + 1);
    console.log(currentpage);
  };
  const handlePrevButton = (id: number) => {
    id === 0 ? setCurrentPage(0) : setCurrentPage(id - 1);
  };
  const totalPages = 4;
  const progress = ((currentpage + 1) / totalPages) * 100;
  return (
    <>
      {currentpage === 0 && (
        <PersonalDetails
          handlePrevButton={(id) => handlePrevButton(id)}
          handleNextButton={(id) => handleNextButton(id)}
          page_id={0}
          onFormSubmit={(data) => {
            console.log(data);
          }}
        >
          <ProgressBar progress={progress}>
            <div className="progress"></div>
          </ProgressBar>
        </PersonalDetails>
      )}
      {currentpage === 1 && (
        <AddressDetails
          handlePrevButton={(id) => handlePrevButton(id)}
          handleNextButton={(id) => handleNextButton(id)}
          page_id={1}
          onFormSubmit={(data) => {
            console.log(data);
          }}
        >
          <ProgressBar progress={progress}>
            <div className="progress"></div>
          </ProgressBar>
        </AddressDetails>
      )}
      {currentpage === 2 && (
        <Skills
          page_id={2}
          handlePrevButton={(id) => handlePrevButton(id)}
          handleNextButton={(id) => handleNextButton(id)}
          onFormSubmit={(data) => {
            console.log(data);
          }}
        >
          <ProgressBar progress={progress}>
            <div className="progress"></div>
          </ProgressBar>
        </Skills>
      )}
      {userData}
      {/* {currentpage === 3 && <Sumary></Sumary>} */}
    </>
  );
}

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 10px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px auto;
  .progress {
    height: 100%;
    width: ${(props) => props.progress}%;
    /* 👈 progress (set this % dynamically later) */
    background-color: rgba(152, 152, 237, 1);
    border: 0.5px solid grey;
    border-radius: 10px 0 0 10px; /* smooth start */
    transition: width 0.4s ease; /* smooth animation when width changes */
  }
`;
export default App;
