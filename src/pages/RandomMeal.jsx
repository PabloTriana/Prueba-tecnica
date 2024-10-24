import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../style/mealInfo.css";

export default function RandomMeal() {
  const [meal, setMeal] = useState([]);
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  //Funcion para obtener un platillo aleatorio
  const showData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const mealInfo = data.meals[0];
        //Se le cambia el formato del link de youtube para poder verlo en la misma pagina
        const embedUrl = mealInfo.strYoutube.replace("watch?v=", "embed/");
        //Constante para almacenar los valores de ingredientes y porcion
        const ingredientInfo = [];
        // se utilizo un arreglo para poder crear la relacion del ingrediente con su respectiva porcion
        for (let index = 1; index <= 20; index++) {
          const ingredient = mealInfo[`strIngredient${index}`];
          const measure = mealInfo[`strMeasure${index}`];
          //Se compara que exista el ingrediente y la porcion para no agregar valores nulos
          if (ingredient && measure) {
            //Agregar al arreglo
            ingredientInfo.push(`${ingredient} ${measure}`);
          }
        }
        //Actualiza los valores del estado
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
      <NavBar />
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
