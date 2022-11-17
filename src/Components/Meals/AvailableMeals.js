import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";

export default function AvailableMeals(props) {
  const availableMeals = [
    {
      id: Math.random().toString(),
      title: "sushi",
      name: "finest fish and veggeis",
      price: 20,
    },
    {
      id: Math.random().toString(),
      title: "pasta",
      name: "red souce pasta yummie",
      price: 15,
    },
    {
      id: Math.random().toString(),
      title: "chowmean",
      name: "delecious chowmean spiecy",
      price: 12,
    },
    {
      id: Math.random().toString(),
      title: "mushrome",
      name: "crispy mushrome crunchy",
      price: 25,
    },
    {
      id: Math.random().toString(),
      title: "cheese chilli",
      name: "red chilly with green souce",
      price: 50,
    },
  ];

  const quantityAddHandler = (quantity)=>{
       props.onQuantityAdd(quantity)
  }

  return (
    <Card className={classes["available-meals"]}>
      {availableMeals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            title={meal.title}
            name={meal.name}
            price={meal.price}
            onQuantityAdd={quantityAddHandler}
          />
        );
      })}
    </Card>
  );
}
