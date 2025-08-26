import styled from "styled-components";
import { useForm, type FieldValues } from "react-hook-form";
import type { ReactNode } from "react";
// import { useNavigate } from "react-router-dom";
interface Props {
  page_id: number;
  handleNextButton: (id: number) => void;
  handlePrevButton: (id: number) => void;
  onFormSubmit: (data: FieldValues) => void;
  children: ReactNode;
}

const PersonalDetails = ({
  onFormSubmit,
  page_id,
  handleNextButton,
  handlePrevButton,
  children,
}: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("user") || "{}"),
  });
  function handleSaveData(data: FieldValues) {
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  }
  return (
    <>
      {children}
      <PersonalDetailsContainer>
        <div className="container">
          <div className="topcolorbox"></div>
          <div className="heading-container">
            <h1>Personal Information</h1>
          </div>
          <div>
            <form
              onSubmit={handleSubmit((data) => {
                onFormSubmit(data);
                handleSaveData(data);
                handleNextButton(page_id);
              })}
            >
              <div className="input-container">
                <label htmlFor="name">Full Name</label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-container">
                <label htmlFor="age">Age</label>
                <input
                  {...register("age")}
                  id="age"
                  type="number"
                  className="form-input"
                  placeholder="Enter your age"
                />
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
        </div>
      </PersonalDetailsContainer>
    </>
  );
};

const PersonalDetailsContainer = styled.div`
  width: 100%;
  min-height: 100vh; /* full height */
  display: flex; /* use flex for easy centering */
  justify-content: center;
  align-items: center;

  .container {
    margin-top: 20px;
    width: 50%; /* center block takes 50% of page */
  }
  .topcolorbox {
    height: 2px; /* thin strip */
    background-color: rgba(152, 152, 237, 1);
    width: 100%;
    padding: 10px;
    border: 0.5px solid grey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
      padding: 10px;
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

  .button-container {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  button {
    border: 0.5px solid grey;
    padding: 0.7rem 0.7rem;
    background-color: rgba(152, 152, 237, 1);
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(123, 123, 236, 1);
  }
`;
export default PersonalDetails;
