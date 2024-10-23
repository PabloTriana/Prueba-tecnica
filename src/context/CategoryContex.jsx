import React, { createContext, useState, useEffect } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await fetch(url);
    const data = await response.json();
    const fetchedCategories = data.categories.map(category => ({
      idCategory: category.idCategory,
      strCategory: category.strCategory
    }));
    setCategories(fetchedCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
