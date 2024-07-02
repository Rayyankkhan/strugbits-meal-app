import React from "react";
import MealCard from "./MealCard";
import deleteIcon from '../assets/delete.svg'

const WeekMeals = ({ meals, removeMeal }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 h-screen">
      {meals.map((meal, index) => (
        <div key={index} className=" ">
          <MealCard
            mealname={meal.name}
            mealType={meal.mealType}
            mealInstruction={meal.instructions}
            mealImage={meal.image}
            mealcuisine={meal.cuisine}
            mealrating={meal.rating}
            deleteCard={() => removeMeal(index)}
            DeleteIcon={deleteIcon}
            imghidden={''}
          />
          
        </div>
      ))}
    </div>
  );
};

export default WeekMeals;
