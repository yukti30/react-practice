// import { useState } from "react";
import { useState } from "react";
// import { MdGpsFixed } from "react-icons/md";
// import Message from "./componenets/Message";
import { produce } from "immer";

const App = () => {
  //   const [firstname, setfirstName] = useState("");
  //   const [lastname, setLastName] = useState("");
  //   const [person, setPersonName] = useState({ FirstName: "", LastName: "" });

  //updating objects

  //   const [drink, setDrink] = useState({
  //     title: "Americano",
  //     price: 5,
  //   });

  //   const handleClick = () => {
  //     const updatedDrink = {
  //     //   title: drink.title;
  //       //When too many properties
  //       ...drink,
  //       price: 6,
  //     };
  //     setDrink(updatedDrink);
  //   };

  // updating nested object

  //   const [customer, setCustomer] = useState({
  //     name: "John",
  //     address: {
  //       city: "San Francisco",
  //       zipcode: 94111,
  //     },
  //   });
  //   const handleClick = () => {
  //     setCustomer({
  //       ...customer,
  //       address: { ...customer.address, zipcode: 94222 },
  //     });
  //   };

  //updating arrays
  //   const [tags, setTags] = useState(["happy", "cheerful"]);
  //   const handleClick = () => {
  //     // Adding
  //     setTags([...tags, "exciting"]);
  //     // Removing
  //     setTags(tags.filter((tag) => tag !== "happy"));
  //     // updating an item
  //     setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  //   };

  //updating arrays of object
  //   const [bugs, setBugs] = useState([
  //     { id: 1, title: " Bug 1", fixed: false },
  //     {
  //       id: 2,
  //       title: " Bug 2",
  //       fixed: false,
  //     },
  //   ]);
  //   const handleClick = () => {
  //     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, title: "ant" } : bug)));
  //   };
  //using immer library
  const [bugs, setBugs] = useState([
    { id: 1, title: " Bug 1", fixed: false },
    {
      id: 2,
      title: " Bug 2",
      fixed: false,
    },
  ]);
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <div>
      {/* {person.FirstName} {person.LastName} */}
      {/* <Message></Message> */}
      {/* {drink.price} */}
      {/* {customer.name}
      {customer.address.city} {customer.address.zipcode} */}
      {/* {tags} */}
      {bugs.map((bug) => (
        <li>{bug.fixed === true ? "fixed" : "new"}</li>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
