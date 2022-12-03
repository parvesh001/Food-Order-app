import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import BackgroundImg from "./Components/BackgroundImage/BackgroundImg";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./Store/ContextProvider";
import OrderForm from "./Components/OrderForm/OrderForm";

function App() {
  const [clicked, setClicked] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const cartClickHandler = () => {
    setClicked(true);
  };
  const closeCartHandler = () => {
    setClicked(false);
  };
  const orderMealHandler = () => {
    setOrdered(true);
    setClicked(false);
  };
  const backClickHandler = ()=>{
    setOrdered(false)
    console.log('clicked')
  }

  return(
    <ContextProvider>
      {clicked && (
        <Cart onCartClose={closeCartHandler} onOrder={orderMealHandler} />
      )}
      <Header onCartClick={cartClickHandler} />
      {ordered && <OrderForm onBack={backClickHandler}/>}
      {!ordered && <BackgroundImg />}
     {!ordered && <main>
        <Meals />
      </main>}
    </ContextProvider>
  );
}

export default App;
