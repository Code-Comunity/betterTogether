import React from 'react';
import Navbar from '../../../components/menu/menu';
import './style.css';
import hero from '../../../assets/header.png';

export default function Home() {
  return (
    <>
      <Navbar />
    <header>
      <img src={hero} alt="promotion"/>
    </header>


      <h1>Homepage</h1>


    </>
  );
}
