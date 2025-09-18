import { useState } from "react";
import AddressDetails from "./components/AddressDetails";
import PersonalDetails from "./components/PersonalDetails";
import ProgressSlider from "./components/ProgressSlider";
import Skillset from "./components/Skillset";

import type { AddressData } from "./components/AddressDetails";
import type { PersonalData } from "./components/PersonalDetails";
import type { SkillData } from "./components/Skillset";
import Summary from "./components/Summary";
import ThankyouCard from "./components/ThankyouCard";

const App = () => {
  const [userData, setUserData] = useState<{
    personal?: PersonalData;
    address?: AddressData;
    skills?: SkillData;
  }>({});
  const [pages, setPages] = useState(0);
  return (
    <>
      {pages >= 0 && pages <= 3 && (
        <ProgressSlider pagesValue={pages}></ProgressSlider>
      )}
      {pages == 0 && (
        <PersonalDetails
          onNextPress={() => setPages(1)}
          onPrevPress={() => setPages(0)}
          onPersonalDetailSubmit={(data: PersonalData) => {
            setUserData((prev) => ({ ...prev, personal: data }));
          }}
        ></PersonalDetails>
      )}
      {pages == 1 && (
        <AddressDetails
          onNextPress={() => setPages(2)}
          onPrevPress={() => setPages(0)}
          onAddressDetailSubmit={(data: AddressData) => {
            setUserData((prev) => ({ ...prev, address: data }));
          }}
        ></AddressDetails>
      )}
      {pages == 2 && (
        <Skillset
          onNextPress={() => setPages(3)}
          onPrevPress={() => setPages(1)}
          onSkillsSubmit={(data: SkillData) => {
            setUserData((prev) => ({ ...prev, skills: data }));
          }}
        ></Skillset>
      )}
      {pages == 3 && (
        <Summary onSubmittingData={() => setPages(4)} data={userData}></Summary>
      )}
      {pages == 4 && <ThankyouCard></ThankyouCard>}
    </>
  );
};

export default App;
