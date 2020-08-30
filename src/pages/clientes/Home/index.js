import React from 'react';
import Navbar from '../../../components/menu/menu';

//css
import './style.css';

//imagens
import hero from '../../../assets/header.png';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
    <header>
      <img src={hero} alt="promotion"/>
    </header>

      <h1>Homepage</h1>


    </div>
  );
}
