/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from 'react';
import Navbar from '../../../components/menu/menu';
import { IoIosCalculator} from "react-icons/io";
//css
import './style.css';
//API
import api from '../../../service/api';






export default function Produto() {

  const url = window.location.href;
  const splitURL = url.split('/');

  //USE STATES

  const [produto, setProduto] = useState([]);

  
  useEffect(()=>{
    async function getApi(){
      try{
        const data = await api.get(`/produto/${splitURL[4]}`)
        const aiui = data.data;
        setProduto([aiui]);
      }catch(err){
        console.log(err);
      }
    }
    getApi();
  },[])

  /*Parte de ADICIONAR AO CARRINHO*/
  //GETTER
  const carrinho = localStorage.getItem('@btgther/carrinho');
  const parseCarrinho = JSON.parse(carrinho);
  //SETTER
  function Comprar(){
    if(parseCarrinho === null){
      localStorage.setItem('@btgther/carrinho', JSON.stringify(produto));
    }
    if(parseCarrinho != null){
      const item = parseCarrinho
        item.push(produto[0])
      localStorage.setItem('@btgther/carrinho', JSON.stringify(item));
    }
  }
  console.log(parseCarrinho)
  return (
    <>
      <Navbar />
      <div className="produto-container">
       {
         produto.map(e=>{
           return(
            <div className="produto-content">
            <div className="produto-esquerda">
              <div className="foto-produto">
                <img src={e.img} alt="teste"/>
              </div>
              <div className="descricao-produto">
                <h1>{e.produto}</h1>
                <p>{e.descrisao}</p>
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
                  <button onClick={()=>Comprar()} className="button-produto-add"><h2>Adicionar ao carrinho</h2></button>
                </div>
              </div>
            </div>
          </div>
           )
         })
       }
      </div>
    </>
  );
}
