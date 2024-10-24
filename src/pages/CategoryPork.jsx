import React, { useState, useEffect, useContext } from "react";
import {CategoryContext} from "../context/CategoryContex";
import PrepareButton from "../components/PrepareButton";
import CategoryNavBar from "../components/CategoryNavBar";
import SearchBar from "../components/SearchBar";
import RandomButton from "../components/RandomButton";
import DetailMeal from "../components/DetailMeal";
import NavBar from "../components/NavBar";
import "../style/ContentMeal.css"


export default function CategoryPork() {
  const [mealPork, setMealPork] = useState([]);
  const { categories } = useContext(CategoryContext);
  const [search, setSearch] = useState("");

  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork";
  //Funcion para obtener todos los platillos de pork
  const showData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const meals = data.meals.map((meal) => ({
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
        }));
        /*
          Actualizar los valores del estados
          Obteniendo los una copia de los elementos previos y agregando los elementos nuevos 
        */
        setMealPork((prevMeals) => [...prevMeals, ...meals]);
      });
  };

  //Funcion para filtrar las listas de comida
  const filteredMeals = mealPork.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="content-meal">
    <NavBar/>
    <SearchBar onSearch={(value) => setSearch(value)} />
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
          <div className="content-buttonp">
            <PrepareButton text="Prepare" idMeal={meal.idMeal} />
          </div>
        </div>
      ))}
    </div>
    <RandomButton text="I do not know how to prepare" />
  </div>
  );
}
