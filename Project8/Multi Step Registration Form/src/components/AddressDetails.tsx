import styled from "styled-components";
import { useForm, type FieldValues } from "react-hook-form";
import type { ReactNode } from "react";
interface Props {
  page_id: number;
  onFormSubmit: (data: FieldValues) => void;
  handlePrevButton: (id: number) => void;
  handleNextButton: (id: number) => void;
  children: ReactNode;
}

const AddressDetails = ({
  page_id,
  onFormSubmit,
  handleNextButton,
  handlePrevButton,
  children,
}: Props) => {
  const handleSaveData = (data: FieldValues) => {
    const existing = JSON.parse(localStorage.getItem("user") || "{}");
    const updated = { ...existing, ...data }; // merge previous + new step
    localStorage.setItem("user", JSON.stringify(updated));
  };
  const { register, handleSubmit } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("user") || "{}"),
  });
  return (
    <>
      {children}
      <AddressDetailsContainer>
        <div className="container">
          <div className="topcolorbox"></div>
          <div className="heading-container">
            <h1>Address Details</h1>
          </div>
          <form
            onSubmit={handleSubmit((data) => {
              onFormSubmit(data);
              handleSaveData(data);
              handleNextButton(page_id);
            })}
          >
            <div className="input-container">
              <label htmlFor="flatno">Flat/House No.</label>
              <input
                {...register("flatno")}
                id="flatno"
                type="text"
                placeholder="Enter Flat/House No"
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="street">Street</label>
              <input
                {...register("street")}
                id="street"
                type="text"
                placeholder="Enter your Street"
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="city">City</label>
              <input
                {...register("city")}
                id="city"
                type="text"
                placeholder="Enter your current City"
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="zip">Zipcode</label>
              <input
                {...register("zip")}
                id="zip"
                type="text"
                placeholder="Enter zipcode of your area"
              ></input>
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
      </AddressDetailsContainer>
    </>
  );
};

const AddressDetailsContainer = styled.div`
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
    padding-top: 0px;
    height: 0.5px;
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
    background-color: rgba(123, 123, 236, 1);
  }
`;
export default AddressDetails;
