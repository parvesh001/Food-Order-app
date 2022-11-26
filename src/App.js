import React, { useState } from "react";
import './App.css'
import Header from "./Components/Header/Header";
import BackgroundImg from "./Components/BackgroundImage/BackgroundImg";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./Store/ContextProvider";


function App() {
  const [clicked, setClicked] = useState(false);

  const cartClickHandler = () => {
    setClicked(true);
  };
  const closeCartHandler = () => {
    setClicked(false);
  };

  return (
    <ContextProvider>
      {clicked && (
        <Cart onCartClose={closeCartHandler}  />
      )}
      <Header onCartClick={cartClickHandler} />
      <BackgroundImg />
      <main>
        <Meals/>
      </main>
    </ContextProvider>
  );
}

export default App;
