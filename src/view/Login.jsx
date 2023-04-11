import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Welcome! Enter your email and password to continue</h2>
      <section>
        <h3>test data</h3>
        <div>
          <i className="fa-regular fa-envelope"></i>
          <p>el correo</p>
        </div>
        <div>
          <i className="fa-solid fa-lock"></i>
          <p>la contraseña</p>
        </div>
      </section>
      <form action="">
        <section>
          <p>Email</p>
          <input type="text" />
          <p>password</p>
          <input type="password" />
        </section>
        <button>Login</button>
      </form>
      <p>
        Don't have an account? <a href="">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
