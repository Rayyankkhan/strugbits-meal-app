import { useState, useEffect } from "react";
import axios from "axios";

import Tabs from "../Components/Tabs";
import MealsList from "../Components/MealsList";
import WeekMeals from '../Components/WeekMeals'
import AddMealsModal from "../Components/AddMeals";

const Home = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [weekMeals, setWeekMeals] = useState([[], [], [], []]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [allMeals, setAllMeals] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState([]);

    useEffect(() => {
      axios.get('https://dummyjson.com/recipes')
        .then(response => {
          setAllMeals(response.data.recipes);
          const initialWeekMeals = [[], [], [], []];
          initialWeekMeals[0] = response.data.recipes.slice(0, 1); 
          initialWeekMeals[1] = response.data.recipes.slice(2, 4); 
          initialWeekMeals[2] = response.data.recipes.slice(4, 6); 
          initialWeekMeals[3] = response.data.recipes.slice(6, 8); 
          setWeekMeals(initialWeekMeals);
        
    })
        .catch(error => console.error(error));
    }, []);

  

  const handleMealSelect = (meal) => {
    setSelectedMeals(prevSelected => {
        if (prevSelected.some(selectedMeal => selectedMeal.id === meal.id)) {
            return prevSelected.filter(selectedMeal => selectedMeal.id !== meal.id);
        }
        return [...prevSelected, meal];
    });
};


const addMealsToWeek = (week) => {
  const weekIndex = week - 1;
  const newMeals = selectedMeals.filter(meal => !weekMeals[weekIndex].some(m => m.id === meal.id));
  const duplicateMeals = selectedMeals.filter(meal => weekMeals[weekIndex].some(m => m.id === meal.id));

  if (duplicateMeals.length > 0) {
    alert('Some meals are already added to the selected week.');
  }

      setWeekMeals(weekMeals.map((meals, index) => (
        index === weekIndex ? [...meals, ...newMeals] : meals
      )));
      setModalOpen(false);
      setSelectedMeals([]);
    };

    const removeMeal = (weekIndex, mealIndex) => {
      setWeekMeals(prevWeekMeals => prevWeekMeals.map((meals, index) => (
        index === weekIndex ? meals.filter((_, i) => i !== mealIndex) : meals
      )));
    };




  return (
    <>
       <div className="home-bg h-full pb-32" >
        <div className="hero-pattern xs:h-[250px]  md:h-[321px] bg-no-repeat bg-center z-50 flex items-center justify-center">
          <div className="text-[#222222] font-inter">
          <h1 className="md:text-[50px] xs:text-[35px] font-inter font-bold">Optimized Your Meal</h1>
          <p className="md:text-[16px] xs:text-[14px] text-center">Select Meal to Add in Week. You will be able to edit. modify and change the Meal Weeks. </p>
          </div>
        </div>
        <div className=" xs:px-4 sm:px-10 lg:px-28 py-6 flex items-center md:justify-start xs:justify-center">
      `   <h1 className=" text-left text-[#191919] text-[30px] font-poppins font-semibold">Week Orders</h1>
        </div>
      <div className="flex flex-col md:flex-row gap-y-5 bg-white items-center justify-between sm:px-5 lg:px-28 py-10 mb-10">

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
              <button className={`${ selectedMeals.length === 0 ? "bg-[#9B9B9B]" : "bg-[#004370]"} text-white rounded-md xs:px-5 sm:px-10 lg:px-[50px] py-[7.87px]`} onClick={() => setModalOpen(true)}>Add To Week</button>
             
      </div>
      <div className="flex items-center justify-center ">

      {activeTab === 0 ? (
        <MealsList  meals={allMeals} onMealSelect={handleMealSelect} selectedMeal={selectedMeals}  />
      ) : (
        <WeekMeals meals={weekMeals[activeTab - 1]} removeMeal={(index) => removeMeal(activeTab - 1, index)}  />
      )}
      </div>

      <AddMealsModal
         isOpen={isModalOpen}
         onClose={() => setModalOpen(false)}
         onAddMeal={addMealsToWeek}
      />
    </div>
    </>
  )
}

export default Home
