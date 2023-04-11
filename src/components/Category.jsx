import React, { useEffect, useState } from 'react';
import { getData } from '../services/getData';

const Category = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const res = await getData(
      'https://e-commerce-api.academlo.tech/api/v1/products/categories',
    );
    setCategories(res.data.categories);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((Category) => (
        <p key={Category.id}>{Category.name}</p>
      ))}
    </div>
  );
};

export default Category;
