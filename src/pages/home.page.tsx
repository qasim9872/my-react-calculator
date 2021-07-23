import React from 'react';
import { Calculator } from '../components/calculator';

const Home: React.FC = () => {
  return (
    <div className="flex flex-grow justify-center items-center">
      <Calculator />
    </div>
  );
};

export default Home;
