import React from 'react';
import Shop from '../view/Shop';

const Product = ({ product: productData }) => {
  return (
    <div>
      <img src={`${productData.productImgs[1]}`} alt={`${productData.title}`} />
      <section>
        <h2>{productData.title}</h2>
        <p>price:</p>
        <p>{productData.price}</p>
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </section>
    </div>
  );
};

export default Product;
