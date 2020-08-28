import React from 'react';
import menu from './menu.css';
import { Link } from 'react-router-dom';

import Perfil from '../../assets/testeperfil.png';
import Logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="ladoEsquerdo">
        <img src={Logo} alt="Logo"/>
        </div>
        <div className="ladoDireito">
                    <div className="botoes">
                    <Link to="/" className="btnNav">
                      <h4>Sobre</h4>
                    </Link>
                    <Link to="/" className="btnNav">
                      <h4>Contato</h4>
                    </Link>
                    <Link to="/" className="btnNav">
                      <h4>Carrinho</h4>
                    </Link>
                    </div>
            <div className="perfil">
              <h4>Maria Silva</h4>

              <div className="circle">
                <img src={Perfil} alt="Perfil foto"/>
              </div>
            </div>

        </div>

        
      </nav>
    </>
  );
}
