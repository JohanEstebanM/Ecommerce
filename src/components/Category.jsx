import React, { useEffect, useState } from 'react';
import { getData } from '../services/getData';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState('');
  const [nameValue, SetNameValue] = useState('');

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
      <>
        <div>
          <input type="search" name="query" placeholder="type product name" />
        </div>
        <fieldset>
          <legend>Category</legend>
          {categories.map((Category) => (
            <div key={Category.id}>
              <label htmlFor={Category.id + Category.name}>{Category.name}</label>
              <input
                type="radio"
                name="category"
                value={Category.id}
                checked={categoryValue?.id === Category.id}
                id={Category.id + Category.name}
                onChange={() => setCategoryValue(Category)}
              />
            </div>
          ))}
        </fieldset>
        <button type="submit">filter</button>
      </>
    </div>
  );
};

export default Category;
