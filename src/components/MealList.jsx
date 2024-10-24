import React, { useState, useEffect } from "react";
import PrepareButton from "./PrepareButton";
import SearchBar from "./SearchBar";
import CategoryNavBar from "./CategoryNavBar";
import DetailMeal from "./DetailMeal";
import "../style/ContentMeal.css"

export default function MealList({ categories }) {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const GetMeals = async () => {
    categories.map((category) => {
      const ulr = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;
      fetch(ulr)
      .then((response) => response.json())
      .then((data) => {
        const meals = data.meals.map((meal) => ({
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
          strInstructions: meal.strInstructions,
        }));
        setMeals((prevMeals) => [...prevMeals, ...meals]);
      });
    });
  };

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if(categories) GetMeals();
  }, [categories]);

  return (
    <div className="content-meal">
    <SearchBar onSearch={(value) => setSearch(value)}/>
    <CategoryNavBar categories={categories} /> 
    <div className="scroll-cards">
      {filteredMeals.map((meal) => (
        <div key={meal.idMeal} className="content-cards">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="meal-img"
            />
            <div className="content-name">
              <span className="name-meal">{meal.strMeal}</span>
              <DetailMeal
                idMeal={meal.idMeal}
              />
            </div>
  
            <PrepareButton 
              text="Prepare" 
              idMeal = {meal.idMeal}
            />
        </div>
      ))}
      </div>
    </div>
  );
}
