/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import MealCard from "./MealCard";

const MealsList = ({ meals, onMealSelect, selectedMeal }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {meals.slice(0, 6).map((meal) => (
          <div
            key={meal.id}
            onClick={() => onMealSelect(meal)}
            className={`m-[9px] cursor-pointer flex items-center justify-between rounded-lg  ${
              selectedMeal.some((selectedMeal) => selectedMeal.id === meal.id)
                ? "border-[1px] border-blue-500"
                : "border-[1px] border-transparent"
            }`}
          >
            <MealCard
              mealname={meal.name}
              mealType={meal.mealType}
              mealInstruction={meal.instructions}
              mealImage={meal.image}
              mealcuisine={meal.cuisine}
              mealrating={meal.rating}
              imghidden={'hidden'}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MealsList;
