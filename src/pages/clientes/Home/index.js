import React from 'react';
import Navbar from '../../../components/menu/menu';
import Footer from '../../../components/footer/footer';
import {Link} from 'react-router-dom';

//css
import './style.css';


//imagens
import hero from '../../../assets/header.png';

//api
import data from '../../../api/api';

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
              <Link to={"/produto/"+e.codigo} >
                  <div key={e.id} className="produtos">
                    <div className="foto-produto-home">
                      <img src={e.thumb} alt="teste"/>
                    </div>
                    <div className="home-content-produto">
                      <h1>{e.nome}</h1>
                      <p>{e.preco}</p>
                      <p>12x no cartão</p>
                    </div>
                  </div>
              </Link>
            )
          })}
        </div>     
      </div>
      <Footer />
    </div>
  );
}
