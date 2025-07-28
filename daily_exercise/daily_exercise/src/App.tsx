import { useState } from "react";
// import { IoHandLeft } from "react-icons/io5";
// import NavBar from "./componenets/NavBar";
// import Cart from "./componenets/Cart";

const App = () => {
  //   const [products, setProducts] = useState(["product1", "product2"]);

  //Exercise1
  //   const [game, setGame] = useState({
  //     id: 1,
  //     player1: {
  //       name: "yukti",
  //     },
  //   });
  //   const handleClick = () => {
  //     setGame({ ...game, player1: { ...game.player1, name: "simram" } });
  //   };

  //Exercise2
  //   const [pizza, setPizzaToppings] = useState({
  //     name: "Veggie Paradise",
  //     Toppings: ["Mushrooms"],
  //   });
  //   const handleClick = () => {
  //     setPizzaToppings({ ...pizza, Toppings: [...pizza.Toppings, "Corn"] });
  //   };

  //Exercise3
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "product1", quantity: 1 },
      {
        id: 2,
        title: "product2",
        quantity: 1,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };
  return (
    <>
      {/* <NavBar cartItemsCount={products.length}></NavBar>
      <Cart cartItems={products} onClear={() => setProducts([])}></Cart> */}
      {/* {game.player1.name} */}
      {/* {pizza.Toppings} */}
      {cart.items.map((item) => (
        <li>{item.quantity}</li>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default App;
