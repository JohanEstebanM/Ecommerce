import React from 'react';
import NavBar from '../components/NavBar';
import Category from '../components/Category';
import Product from '../components/Product';

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Category />
        <div>
          <input type="text" />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <Product />
      </main>
    </div>
  );
};

export default Home;
