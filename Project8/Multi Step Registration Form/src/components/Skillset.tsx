import { Box, Button, HStack, Input, Select } from "@chakra-ui/react";
import { skills } from "../data/skills";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
const Skillset = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [skillValue, setSkillValue] = useState("");
  const [skillSet, setSkillSet] = useState<string[]>([]);
  const [input, setInput] = useState(false);

  useEffect(() => {
    setValue("skillSet", skillSet);
  }, [skillSet, setValue]);

  const addSkill = () => {
    if (skillValue && !skillSet.includes(skillValue)) {
      setSkillSet((prev) => [...prev, skillValue]);
      setSkillValue("");
    }
  };

  return (
    <>
      <HStack padding={6}>
        <Select
          placeholder="Select option"
          onChange={(event) => setSkillValue(event.target.value)}
        >
          {skills.map((skill) => (
            <option key={skill.id}>{skill.skill}</option>
          ))}
        </Select>
        <Button
          colorScheme="teal"
          size="sm"
          type="button"
          disabled={false}
          onClick={addSkill}
        >
          Add
        </Button>
      </HStack>
      <HStack padding={6}>
        <Button
          colorScheme="teal"
          size="sm"
          type="button"
          onClick={() => setInput(true)}
        >
          Other{" "}
        </Button>
        {input && (
          <>
            <Input
              value={skillValue}
              onChange={(e) => setSkillValue(e.target.value)}
            ></Input>
            <Button
              colorScheme="teal"
              size="sm"
              type="button"
              disabled={false}
              onClick={addSkill}
            >
              Add
            </Button>
          </>
        )}
      </HStack>

      <Box height={"200px"} bgColor={"teal"} borderRadius={2} overflowY="auto">
        {skillSet.map((skill, index) => (
          <Button marginLeft={2} key={index} rightIcon={<MdCancel></MdCancel>}>
            {skill}
          </Button>
        ))}
      </Box>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input type="hidden" {...register("skillSet")}></Input>
        <HStack justifyContent="space-between" padding={6}>
          <Button colorScheme="teal" size="sm" type="button" disabled={false}>
            Previous
          </Button>
          <Button colorScheme="teal" size="sm" type="submit">
            Submit
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default Skillset;
