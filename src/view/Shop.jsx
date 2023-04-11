import React from 'react';
import NavBar from '../components/NavBar';
import Product from '../components/Product';

const Shop = ({ id }) => {
  return (
    <div>
      <NavBar />
      <main>
        <p>{id}</p>
        <img src="" alt="" />
        <section>
          <h2>nombre del producto</h2>
          <p>descripcion del producto</p>
          <div>
            <p>price:</p>
            <p>precio del producto</p>
          </div>
          <div>
            <p>quantity:</p>
            <input type="number" />
          </div>
          <button>
            <p>add to card</p>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </section>
        <h3>discover similar items</h3>
        <Product />
      </main>
    </div>
  );
};

export default Shop;
