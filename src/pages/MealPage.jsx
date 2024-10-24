import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../style/mealInfo.css";

export default function MealPage() {
  const [meal, setMeal] = useState([]);
  const location = useLocation();
  const { idMeal } = location.state || {};

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const showData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const mealInfo = data.meals[0];
        const embedUrl = mealInfo.strYoutube.replace("watch?v=", "embed/");
        const ingredientInfo = [];

        for (let index = 1; index <= 20; index++) {
          const ingredient = mealInfo[`strIngredient${index}`];
          const measure = mealInfo[`strMeasure${index}`];
          if (ingredient && measure) {
            ingredientInfo.push(`${ingredient} ${measure}`);
          }
        }

        setMeal({
          strMeal: mealInfo.strMeal,
          strMealThumb: mealInfo.strMealThumb,
          strInstructions: mealInfo.strInstructions,
          strYoutube: embedUrl,
          ingredientInfo: ingredientInfo,
        });
      });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="container-info">
      <NavBar/>
      <span className="info-titulo">{meal.strMeal}</span>
      <img
        src={meal.strMealThumb}
        alt={meal.strMealThumb}
        className="info-img"
      />
      <span className="info-detail">{meal.strInstructions}</span>
      <div className="conten-matiealv">
        <div className="list-ingrediente">
          <strong className="text-ingredient">Ingredients:</strong>
          <ul className="ul-ingredient">
            {meal.ingredientInfo &&
              meal.ingredientInfo.map((ingredient, index) => {
                return (
                  <li key={index} className="element-ingredient">
                    {ingredient}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="content-frame">
          {meal.strYoutube ? (
            <iframe
              width="560"
              height="315"
              src={meal.strYoutube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="frame-video"
            ></iframe>
          ) : (
            <br />
          )}
        </div>
      </div>
    </div>
  );
}
