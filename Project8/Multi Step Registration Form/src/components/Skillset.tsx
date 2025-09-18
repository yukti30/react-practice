import { Box, Button, HStack, Input, Select } from "@chakra-ui/react";
import { skills } from "../data/skills";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdCancel, MdAdd } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";

export interface SkillData {
  skills: string[];
}

interface Props {
  onNextPress: () => void;
  onPrevPress: () => void;
  onSkillsSubmit: (data: SkillData) => void;
}

const Skillset = ({ onSkillsSubmit, onPrevPress, onNextPress }: Props) => {
  const { handleSubmit } = useForm();
  const [skillValue, setSkillValue] = useState("");
  const [skillSet, setSkillSet] = useState<string[]>([]);
  const [input, setInput] = useState(false);

  const addSkill = () => {
    if (skillValue && !skillSet.includes(skillValue)) {
      setSkillSet((prev) => [...prev, skillValue]);
      setSkillValue("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkillSet((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const handleSaveData = () => {
    const existing = JSON.parse(localStorage.getItem("user") || "{}");
    const updated = { ...existing, skills: skillSet };
    localStorage.setItem("user", JSON.stringify(updated));
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
          onClick={addSkill}
          rightIcon={<MdAdd />}
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
          rightIcon={<MdAdd />}
        >
          Others
        </Button>
        {input && (
          <>
            <Input
              value={skillValue}
              onChange={(e) => setSkillValue(e.target.value)}
            />
            <Button
              colorScheme="teal"
              size="sm"
              type="button"
              onClick={addSkill}
              rightIcon={<MdAdd />}
            >
              Add
            </Button>
          </>
        )}
      </HStack>

      <Box
        height="200px"
        bgColor="teal"
        borderRadius={4}
        overflowY="auto"
        margin={6}
      >
        {skillSet.map((skill, index) => (
          <Button
            key={index}
            marginLeft={2}
            onClick={() => removeSkill(skill)}
            rightIcon={<MdCancel />}
          >
            {skill}
          </Button>
        ))}
      </Box>

      <form
        onSubmit={handleSubmit(() => {
          onSkillsSubmit({ skills: skillSet });
          handleSaveData();
          onNextPress();
        })}
      >
        <HStack justifyContent="space-between" padding={6}>
          <Button
            colorScheme="teal"
            size="sm"
            type="button"
            leftIcon={<FcPrevious />}
            onClick={onPrevPress}
          >
            Previous
          </Button>
          <Button colorScheme="teal" size="sm" type="submit">
            Next
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default Skillset;
