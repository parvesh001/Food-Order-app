import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";

const dummyMeals = [
  {
    id:'1',
    title: "sushi",
    name: "finest fish and veggeis",
    price: 20,
  },
  {
    id:'2',
    title: "pasta",
    name: "red souce pasta yummie",
    price: 15,
  },
  {
    id:'3',
    title: "chowmean",
    name: "delecious chowmean spiecy",
    price: 12,
  },
  {
    id:'4',
    title: "mushrome",
    name: "crispy mushrome crunchy",
    price: 25,
  },
  {
    id:'5',
    title: "cheese chilli",
    name: "red chilly with green souce",
    price: 50,
  },
];

export default function AvailableMeals() {
  

  const mealList = dummyMeals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        title={meal.title}
        name={meal.name}
        price={meal.price}
      />
    );
  });

  return (
    <Card className={classes["available-meals"]}>
      <ul>{mealList}</ul>
    </Card>
  );
}
