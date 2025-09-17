import { useState } from "react";
import AddressDetails from "./components/AddressDetails";
import PersonalDetails from "./components/PersonalDetails";
import ProgressSlider from "./components/ProgressSlider";
import Skillset from "./components/Skillset";

const App = () => {
  const [pages, setPages] = useState(0);
  return (
    <>
      <ProgressSlider pagesValue={pages}></ProgressSlider>
      {pages == 0 && (
        <PersonalDetails
          onNextPress={() => setPages(1)}
          onPrevPress={() => setPages(0)}
          onPersonalDetailSubmit={(data) => console.log(data)}
        ></PersonalDetails>
      )}
      {pages == 1 && (
        <AddressDetails
          onNextPress={() => setPages(2)}
          onPrevPress={() => setPages(0)}
          onAddressDetailSubmit={(data) => console.log(data)}
        ></AddressDetails>
      )}
      {pages == 2 && (
        <Skillset
          onPrevPress={() => setPages(1)}
          onSkillsSubmit={(data) => console.log(data)}
        ></Skillset>
      )}
    </>
  );
};

export default App;
