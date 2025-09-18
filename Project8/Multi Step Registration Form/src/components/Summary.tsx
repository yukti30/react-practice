import { Box, Button, Heading } from "@chakra-ui/react";
import type { AddressData } from "./AddressDetails";
import type { PersonalData } from "./PersonalDetails";
import type { SkillData } from "./Skillset";
// import { data } from "react-router-dom";

interface Props {
  data: { personal?: PersonalData; address?: AddressData; skills?: SkillData };
  onSubmittingData: () => void;
}

const Summary = ({ data, onSubmittingData }: Props) => {
  return (
    <>
      <Box bgColor={"teal"} padding={6} marginTop={5}>
        <Heading>Personal Details</Heading>
        <li>{data.personal?.name}</li>
        <li>{data.personal?.age}</li>
        <li>{data.personal?.email}</li>
        <Heading>Address Details</Heading>
        <li>{data.address?.houseno}</li>
        <li>{data.address?.street}</li>
        <li>{data.address?.city}</li>
        <li>{data.address?.zip}</li>
        <Heading>Skills</Heading>
        {data.skills?.skills.map((s) => (
          <li>{s}</li>
        ))}
      </Box>
      <Button
        colorScheme="teal"
        size="sm"
        type="submit"
        marginTop={2}
        onClick={onSubmittingData}
      >
        Submit
      </Button>
    </>
  );
};

export default Summary;
