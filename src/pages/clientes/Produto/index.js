import React from 'react';
import Navbar from '../../../components/menu/menu';
import { IoIosCalculator} from "react-icons/io";

//css
import './style.css';

//api
import data from './api';



export default function Produto() {
  return (
    <>
      <Navbar />
      <div className="produto-container">
        { data.map(e => { 

          //Aqui chamaremos a api, com o produto selecionado
          
          return( 
          <div className="produto-content">
            <div className="produto-esquerda">
              <div className="foto-produto">
                <img src={e.thumb} alt="teste"/>
              </div>
              <div className="descricao-produto">
                <h1>{e.nome}</h1>
                <p>{e.descricao}</p>
              </div>
            </div>

            <div className="produto-direita">
              <div className="align-preco">
                <div className="preco-produto-pag">
                  <h1>{e.preco}</h1>
                  <p>1 x de R${e.preco} sem juros no cartão</p>
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
          )
          })}
      </div>
    </>
  );
}
