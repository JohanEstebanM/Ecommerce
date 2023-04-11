import React, { useState } from 'react';

const LoginForm = () => {
  const [toggleType, setToggleType] = useState('password');

  const handleClickType = () => {
    if (toggleType === 'password') setToggleType('text');
    else if (toggleType === 'text') setToggleType('password');
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="emailId">Email: </label>
          <input type="email" id="emailId" placeholder="Example@miemail.com" />
        </div>
        <div>
          <label htmlFor="passwordId">Password: </label>
          <div>
            <input type={toggleType} id="passwordId" />
            <button type="button" onClick={handleClickType}>
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
