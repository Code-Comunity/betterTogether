/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect,useState} from 'react';
import Navbar from '../../../components/menu/menu';
import { IoIosCalculator} from "react-icons/io";
//css
import './style.css';
//API
import api from '../../../service/api';
import Context from '../../../contexts/auth';

export default function Produto() {
  
  const {qtdMais, qtdMenos} = useContext(Context);
  let { qtd } = useContext(Context);

  const url = window.location.href;
  const splitURL = url.split('/');

  //USE STATES

  const [produto, setProduto] = useState([]);

  console.log(splitURL);
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
  const parseCarrinho = JSON.parse(carrinho); //TRANSFORMAR STRING EM OBJETO

  
  //SETTER
  function Comprar(){
    if(parseCarrinho === null){
      produto[0].quantidade = qtd;
      
      localStorage.setItem('@btgther/carrinho', JSON.stringify(produto));
    }
    if(parseCarrinho != null){
      produto[0].quantidade = qtd;
      const item = parseCarrinho
        item.push(produto[0])
      localStorage.setItem('@btgther/carrinho', JSON.stringify(item));
    }

    alert("Produto adicionado ao carrinho!!");  
  }
  


  return (
    <>
      <Navbar />
      <div className="produto-container">
       {
         //.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
         produto.map(e =>{
          let preco = e.preco
          let total = preco * qtd;
          console.log(e)
           return(
            <div className="produto-content">
            <div className="produto-esquerda">
              <div className="foto-produto">
                <img src={e.images} alt="teste"/>
              </div>
              <div className="descricao-produto">
                <h1>{e.produto}</h1>
                <p>{e.descrisao}</p>
              </div>
            </div>

            <div className="produto-direita">
              <div className="align-preco">
                <div className="preco-produto-pag" >
                  <h1>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
                  <p>1 x de {preco} sem juros no cartão</p>
                </div>

                <div className="qtd-produto-pag">
                  <h2>Quantidade:</h2>
                  <div className="icon-produto">
                    <h1 className="naoSelecionavel" unselectable="on" onClick={qtdMenos}>-</h1> 
                    <input type="text" placeholder={qtd} readOnly />
                    <h1 className="naoSelecionavel" unselectable="on" onClick={qtdMais}>+</h1>
                  </div> 
                </div>

                <div className="produto-frete-calc">
                  <h2>Calcular frete:</h2>
                  <div className="icon-produto"> 
                    <input type="text" />
                    <h3><IoIosCalculator size="20px" /></h3>
                  </div>
                </div>
                <div className="button-container">
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
