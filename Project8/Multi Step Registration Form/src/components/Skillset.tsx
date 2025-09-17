import { Box, Button, HStack, Input, Select, Spinner } from "@chakra-ui/react";
import { skills } from "../data/skills";
import { useEffect, useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";
import { MdAdd } from "react-icons/md";

interface Props {
  onPrevPress: () => void;
  onSkillsSubmit: (data: FieldValues) => void;
}
const Skillset = ({ onSkillsSubmit, onPrevPress }: Props) => {
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
          rightIcon={<MdAdd></MdAdd>}
        >
          Add
        </Button>
      </HStack>
      <HStack padding={6}>
        <Button
          whiteSpace={"normal"}
          colorScheme="teal"
          size="sm"
          type="button"
          onClick={() => setInput(true)}
          rightIcon={<MdAdd></MdAdd>}
        >
          Others
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
              rightIcon={<MdAdd></MdAdd>}
            >
              Add
            </Button>
          </>
        )}
      </HStack>

      <Box
        height={"200px"}
        bgColor={"teal"}
        borderRadius={4}
        overflowY="auto"
        margin={6}
      >
        {skillSet.map((skill, index) => (
          <Button marginLeft={2} key={index} rightIcon={<MdCancel></MdCancel>}>
            {skill}
          </Button>
        ))}
      </Box>

      <form
        onSubmit={handleSubmit((data) => {
          onSkillsSubmit(data);
          return <Spinner></Spinner>;
        })}
      >
        <Input type="hidden" {...register("skillSet")}></Input>
        <HStack justifyContent="space-between" padding={6}>
          <Button
            colorScheme="teal"
            size="sm"
            type="button"
            disabled={false}
            leftIcon={<FcPrevious></FcPrevious>}
            onSubmit={onPrevPress}
          >
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
