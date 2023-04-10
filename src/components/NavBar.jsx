import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <h2>Ecommerce</h2>
      <button>
        <a href="">
          <i class="fa-regular fa-user"></i>
        </a>
      </button>
      <button>
        <a href="">
          <i class="fa-solid fa-box-archive"></i>
        </a>
      </button>
      <button>
        <a href="">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </button>
    </nav>
  );
};

export default NavBar;
