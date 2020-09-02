import React from 'react';
import Navbar from '../../../components/menu/menu';
import {Link} from 'react-router-dom';

//css
import './style.css';


//imagens
import hero from '../../../assets/header.png';

//api
import data from './api';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <header>
        <img src={hero} alt="promotion"/>
      </header>
      <div className="home-content">
        <div className="produtos-container">
          { data.map(e => {
            return(
              <Link>
                  <div key={e.id} className="produtos">
                    <div className="foto-produto">
                      <img src={e.thumb} alt="teste"/>
                    </div>
                    <div className="content-produto">
                      <h1>{e.nome}</h1>
                      <p>R$ {e.preco}</p>
                      <p>12x no cartão</p>
                    </div>
                  </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
