import React, {useState, useEffect, useCallback} from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";
import globalStyle from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";




export default function AvailableMeals() {
  const [dummyMeals, setDummyMeals] = useState([])
  
  const fetchMealsHandler = useCallback(async()=>{
      try{
        const response = await fetch("https://food-order-9ea7b-default-rtdb.firebaseio.com/dummyMeals.json");
        if(!response.ok){
          throw new Error('something went wrong!!')
        }
        const data = await response.json();
        const loadedMeals = [];

        for(let key in data){
          loadedMeals.push({
            id:key,
            title:data[key].name,
            name:data[key].discription,
            price:data[key].price
          })
        }

        setDummyMeals([...loadedMeals])
    
      }catch(err){
         console.log(err.message)
      }
      
  },[])

  useEffect(()=>{fetchMealsHandler()},[fetchMealsHandler])

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
          globalStyle['pt-md-3']
        )}
      >
        {mealList}
      </ul>
    </Card>
  );
}
