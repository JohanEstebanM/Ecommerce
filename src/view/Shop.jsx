import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Product from '../components/Product';
import { getData } from '../services/getData';

const Shop = ({ id }) => {
  const [product, setProduct] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [content, setContent] = useState(null);

  const loadProduct = async () => {
    try {
      //setIsLoading(true);
      const res = await getData(
        `https://e-commerce-api.academlo.tech/api/v1/products/${id}`,
      );
      setProduct(res.data.product);
      //setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProduct();
  });

  /*useEffect(() => {
    setContent(
      isLoading ? (
        <p>Loading...</p>
      ) : (
        product.map((productData) => (
          <Product product={productData} key={productData.id} />
        ))
      ),
    );
  }, [product, isLoading]);*/

  return (
    <div>
      <NavBar />
      <main>
        {product.length !== 0 ? (
          <img src={`${product.productImgs[1]}`} alt={`${product.title}`} />
        ) : (
          <p>Cargando...</p>
        )}
        <section>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div>
            <p>price:</p>
            <p>{product.price}</p>
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
        {/*content*/}
      </main>
    </div>
  );
};

export default Shop;
