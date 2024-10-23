import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CategoryProvider} from "./context/CategoryContex"
import CategoryBeef from './pages/CategoryBeef';
import CategoryChicken from './pages/CategoryChicken'
import CategoryDessert from './pages/CategoryDessert'
import CategoryLamb from './pages/CategoryLamb'
import CategoryMiscellaneous from './pages/CategoryMiscellaneous'
import CategoryPasta from './pages/CategoryPasta'
import CategoryPork from './pages/CategoryPork'
import CategorySeaFood from './pages/CategorySeaFood'
import CategorySide from './pages/CategorySide'
import CategoryStarter from './pages/CategoryStarter'
import CategoryVegan from './pages/CategoryVegan'
import CategoryVegetarian from './pages/CategoryVegetarian'
import CategoryBreakFast from './pages/CategoryBreakFast'
import CategoryGoat from './pages/CategoryGoat'
import MealPage from './pages/MealPage';
import RandomMeal from './pages/RandomMeal' 
import MyRecibeHub from './pages/MyRecibeHub'
import "./App.css"

function App() {
  
  const categoryBeef = <CategoryBeef />;
  const categoryChicken = <CategoryChicken />;
  const categoryDessert = <CategoryDessert />;
  const categoryLamb = <CategoryLamb />;
  const categoryMiscellaneous = <CategoryMiscellaneous />;
  const categoryPast = <CategoryPasta />;
  const categoryPork = <CategoryPork />;
  const categorySeaFood = <CategorySeaFood />;
  const categorySide = <CategorySide />;
  const categoryStarter = <CategoryStarter />;
  const categoryVegan = <CategoryVegan />;
  const categoryVegetarian = <CategoryVegetarian />;
  const categoryBreakFast = <CategoryBreakFast />;
  const categoryGoat = <CategoryGoat />;
  const mealPage = < MealPage />;
  const randomMeal = <RandomMeal />
  const myRecibeHub  = <MyRecibeHub/>

  return (
    <>
      <CategoryProvider>
      <Router>
        <Routes>
          <Route path={'/'} element={myRecibeHub} />
          <Route path={'/Beef'} element={categoryBeef} />
          <Route path='/Chicken' element={categoryChicken} />
          <Route path='/Dessert' element={categoryDessert} />
          <Route path='/Lamb' element={categoryLamb} />
          <Route path='Miscellaneous' element={categoryMiscellaneous} />
          <Route path='Pasta' element={categoryPast} />
          <Route path='Pork' element={categoryPork} />
          <Route path='SeaFood' element={categorySeaFood} />
          <Route path='Side' element={categorySide} />
          <Route path='Starter' element={categoryStarter} />
          <Route path='Vegan' element={categoryVegan} />
          <Route path='Vegetarian' element={categoryVegetarian} />
          <Route path='Breakfast' element={categoryBreakFast} />
          <Route path='Goat' element={categoryGoat} />
          <Route path='meal-Page' element={mealPage} />
          <Route path='lucky-meal' element={randomMeal} />
        </Routes>
      </Router>
      </CategoryProvider>
    </>
  );
}

export default App;
