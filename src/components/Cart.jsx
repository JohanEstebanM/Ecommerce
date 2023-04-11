import React, { useState } from 'react';

const Cart = () => {
  const [payTotal, usePayTotal] = useState(0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <button>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <div>
        <p>aqui un map con la info de los productos</p>
      </div>
      <div>
        <p>total:</p>
        <p>{payTotal}</p>
      </div>
      <button>
        <p>Checkout</p>
      </button>
    </div>
  );
};

export default Cart;
