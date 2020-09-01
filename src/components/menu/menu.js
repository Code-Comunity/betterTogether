import React from 'react';
import { Link } from 'react-router-dom';

//Css
import './menu.css';

//Imagens
import Perfil from '../../assets/testeperfil.png';
import Logo from '../../assets/logowhite.svg';
import Contato from '../../assets/contato.svg';
import Carrinho from '../../assets/carrinho.svg';
import Sobre from '../../assets/sobre.svg'

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
                      <img src={Sobre} alt="Sobre"/>
                    </Link>
                    <Link to="/contato" className="btnNav">
                      <h4>Contato</h4>
                      <img src={Contato} alt="Contato"/>
                    </Link>
                    <Link to="/" className="btnNav">
                      <h4>Carrinho</h4>
                      <img src={Carrinho} alt="Carrinho"/>
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
