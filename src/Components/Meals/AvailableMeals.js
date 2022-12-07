import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";
import globalStyle from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import useFetch from "../../Hooks/use-fetch";

export default function AvailableMeals() {
  const [dummyMeals, setDummyMeals] = useState([]);
  const { isLoading, error, backendIntraction: fetchMeals } = useFetch();

  useEffect(() => {
    const requestConfig = {
      url: "https://food-order-9ea7b-default-rtdb.firebaseio.com/dummyMeals.json",
    };
    const applyData = (data) => {
      const loadedMeals = [];
      for (let key in data) {
        loadedMeals.push({
          id: key,
          title: data[key].name,
          name: data[key].discription,
          price: data[key].price,
        });
      }
      setDummyMeals([...loadedMeals]);
    };
    fetchMeals(requestConfig, applyData);
  }, [fetchMeals]);

  if(isLoading){
    return <p className={classes["loading-text"]}>Items are being loaded...</p>
  }

  if (error) {
    return <p className={classes["error-text"]}>{error}!!</p>
  }

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
      <ul
        className={cx(
          globalStyle["ps-1"],
          globalStyle["ps-md-5"],
          globalStyle["pe-md-3"],
          globalStyle["pt-md-3"],
        )}
      >
        {mealList}
      </ul>
    </Card>
  );
}
