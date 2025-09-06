import {
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  useEffect,
} from "react";
import { useForm, type FieldValues } from "react-hook-form";
import styled from "styled-components";

interface Props {
  page_id: number;
  children: ReactNode;
  onFormSubmit: (data: FieldValues) => void;
  handlePrevButton: (id: number) => void;
  handleNextButton: (id: number) => void;
}
const Skills = ({
  page_id,
  children,
  handleNextButton,
  handlePrevButton,
  onFormSubmit,
}: Props) => {
  const [skillset, setSkills] = useState<string[]>([]);
  const handleSaveData = (data: FieldValues) => {
    const existing = JSON.parse(localStorage.getItem("user") || "{}");
    const updated = { ...existing, ...data }; // merge previous + new step
    localStorage.setItem("user", JSON.stringify(updated));
  };
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("user") || "{}"),
  });
  useEffect(() => {
    setValue("skillset", skillset);
  }, [skillset]);
  const skillref = useRef<HTMLInputElement>(null);
  const handleAddSkills = (event: FormEvent) => {
    event.preventDefault();
    if (skillref.current !== null) {
      setSkills([...skillset, skillref.current.value]);
      skillref.current.value = "";
    }
  };
  const handleRemoveSkill = (skill: string) => {
    setSkills(skillset.filter((s) => s !== skill));
  };
  return (
    <>
      {children}
      <SkillContainer>
        <div className="container">
          <div className="topcolorbox"></div>
          <div className="heading-container">
            <h1>Your SkillSet</h1>
          </div>
          <form
            onSubmit={handleSubmit((data) => {
              onFormSubmit(data);
              handleSaveData(data);
              handleNextButton(page_id);
            })}
          >
            <div className="input-container">
              <label htmlFor="skills">Skills</label>
              <input
                id="skills"
                type="text"
                placeholder="Add your skills"
                ref={skillref}
              />
              <button id="add-button" onClick={handleAddSkills}>
                Add+
              </button>
            </div>
            <input type="hidden" {...register("skillset")} />{" "}
            <div className="skillbox">
              <p> Skill I have....</p>
              <ul>
                {skillset.map((skill, index) => (
                  <li key={index}>
                    {skill}{" "}
                    <button onClick={() => handleRemoveSkill(skill)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="button-container ">
              <button
                id="prev-button"
                type="button"
                onClick={() => handlePrevButton(page_id)}
              >
                Prev
              </button>
              <button id="next-button" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
      </SkillContainer>
    </>
  );
};

const SkillContainer = styled.div`
margin-top: 20px;
  width: 100%
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container{
   width:50%;
  }
  .topcolorbox {
    padding-top: 0px;
    height: 0.5px;
    background-color: rgba(152, 152, 237, 1);
    width: 100%;
    padding: 10px;
    border: 0.5px solid grey;
    border-top-left-radius: 5px;
    border-top-right-radius:5px ;
  }
  .heading-container {
    width: 100%;
    height: 130px;
    padding: 10px;
    background-color: white;
    margin-bottom: 20px;
    border: 0.5px solid grey;
  }
  .input-container {
    width: 100%;
    height: 80px; 
    padding: 10px;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 0.5px solid grey;
    label {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
    input {
      border: none;
      padding: 10px 0px 10px;
      width: 90%;
    }
    input:hover {
      outline: none;
      background-color: rgba(152, 152, 237, 0.2);
    }
    input:focus {
      outline: none;
      border: 1px solid rgba(152, 152, 237, 1); /* subtle highlight */
      box-shadow: 0 0 4px rgba(152, 152, 237, 0.5);
    }
  }
     input:hover {
      outline: 0px
      background-color: rgba(152, 152, 237, 1)
      border: 2px solid red;
    }
      .skillbox{
      width: 100%;
      height: 150px;
      background-color: white;
      border-radius: 5px;
      border: 0.5px solid grey;
      padding: 10px;
      overflow-y: auto;
      }
  .button-container {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
    button {
    border: 0.5px solid grey;
    padding: 0.7rem 0.7rem;
    // color: ;
    background-color: rgba(152, 152, 237, 1);
    outline: 0px;
    border-radius: 5px;
  }
    button:hover {
    background-color: rgba(123, 123, 236, 1);}
`;

export default Skills;
