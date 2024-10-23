import React,{useState,useEffect} from 'react'
import SearchBar from '../components/SearchBar';
import RandomButton from '../components/RandomButton'
import CategoryNavBar from '../components/CategoryNavBar';
import MealList from '../components/MealList';

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
        <MealList categories={categories}/>
        <RandomButton
          text = 'I do not know how to prepare'
        />
    </div>
  )
}
