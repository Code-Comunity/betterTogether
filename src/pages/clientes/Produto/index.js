import React from 'react';
import Navbar from '../../../components/menu/menu';
import Footer from '../../../components/footer/footer';
import { IoIosCalculator} from "react-icons/io";

//css
import './style.css';

//api
import data from '../../../api/api';


export default function Produto() {

  const url = window.location.href;
  const splitURL = url.split('/');
  
  //Listar oq tá vindo da api, de acordo com o código retornado na variavel splitURL[4]
  console.log(splitURL[4]) 
  //essa variável é um array, esse array na posição 4, retorna o ultimo parametro de rota, que é o código
  console.log(data) 
  return (
    <>
      <Navbar />
      <div className="produto-container">
        { 
        
        data.filter(filtro=> filtro.codigo === splitURL[4]).map(e => { 

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
                  <p>1 x de {e.preco} sem juros no cartão</p>
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
                  <button className="button-produto-add"><h2>Adicionar ao carrinho</h2></button>
                </div>
              </div>
            </div>
          </div>
          )
          })}
      </div>
      <Footer />
    </>
  );
}
