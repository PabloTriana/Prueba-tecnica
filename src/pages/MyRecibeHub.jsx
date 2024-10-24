import React,{useState,useEffect} from 'react'
import RandomButton from '../components/RandomButton'
import MealList from '../components/MealList';
import NavBar from '../components/NavBar';

export default function MyRecibeHub() {
  const [categories, setCategories] = useState([]);

  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const showData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const categories = data.categories.map((category) => ({
          idCategory: category.idCategory,
          strCategory: category.strCategory,
        }));
        setCategories(categories);
      });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
        <NavBar/>
        <MealList categories={categories}/>
        <RandomButton
          text = 'I do not know how to prepare'
        />
    </div>
  )
}
