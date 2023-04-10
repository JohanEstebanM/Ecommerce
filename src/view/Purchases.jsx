import React from 'react';
import NavBar from '../components/NavBar';

const Purchases = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h2>My purchases</h2>
        <section>
          <div>
            <p>fecha dada por la api</p>
          </div>
          <div>
            <p>nombre dado por la api</p>
            <div>
              <p>numero dado por la api</p>
            </div>
            <p>$ precio dado por la api</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Purchases;
