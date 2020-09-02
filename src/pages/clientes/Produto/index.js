import React from 'react';
import Navbar from '../../../components/menu/menu';
import { IoIosCalculator} from "react-icons/io";

//css
import './style.css';

//api
//import data from './api';

//imagem teste
import Teste from '../../../assets/teste.png';

export default function Produto() {
  return (
    <>
      <Navbar />
      <div className="produto-container">  
        <div className="produto-content">
          <div className="produto-esquerda">
            <div className="foto-produto">
              <img src={Teste} alt="teste"/>
            </div>
            <div className="descricao-produto">
              <h1>Pétalas artificiais</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>

          <div className="produto-direita">
            <div className="align-preco">
              <div className="preco-produto-pag">
                <h1>R$15,00</h1>
                <p>1 x de R$15,00 sem juros no cartão</p>
              </div>
              <div className="produto-frete-calc">
                <h2>Calcular frete:</h2>
                <div className="icon-produto"> 
                  <input type="text" />
                  <h3><IoIosCalculator size="20px" /></h3>
                </div>
              </div>
              <div className="button-container">
                <button className="button-produto"><h2>Comprar</h2></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
