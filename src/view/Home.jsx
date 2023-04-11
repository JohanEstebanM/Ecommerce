import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Category from '../components/Category';
import Product from '../components/Product';
import { getData } from '../services/getData';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const res = await getData('https://e-commerce-api.academlo.tech/api/v1/products');
      setProducts(res.data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setContent(
      isLoading ? (
        <p>Loading...</p>
      ) : (
        products.map((productData) => (
          <Product product={productData} key={productData.id} />
        ))
      ),
    );
  }, [products, isLoading]);

  return (
    <div>
      <NavBar />
      <main>
        <Category />
        <div>
          <input type="text" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {content}
      </main>
    </div>
  );
};

export default Home;
