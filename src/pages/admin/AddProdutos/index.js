import React from 'react';
import { BiFace,BiHomeAlt,BiLayerPlus, BiPackage,BiBullseye } from "react-icons/bi";
import { IoIosAddCircle,IoIosExit} from "react-icons/io";
import {Link} from 'react-router-dom';
import './style.css'
import Logo from '../../../assets/logored.svg';
import Graph from '../../../assets/Dashboard/graph.svg';
import data from '../Dashboard/api';

export default function AddProdutos() {

  const meta = false;

  return (
    <>
<div className="Dashboard">

<div className="header">
  <div className="esquerda">
    <img src={Logo} alt="LogoDashboard"/>
  </div>
  <div className="direta">
    <div className="perfilDash">
      <div className="circleDash"></div>
      <h2>Hélio</h2>
      <h3> <IoIosExit className="exitbtn" size="23px" color="#820E0E" /> </h3>
    </div>
  </div>
</div>

<div className="funcoes">
      <Link to="/dashboard" className="itens"> <BiHomeAlt size="30px"/> </Link>
      <Link to="/addprodutos" className="itens"> <BiPackage size="30px"/> </Link>
      <Link to="/clientes" className="itens"> <BiFace size="30px"/> </Link>
</div>

<div className="main">
    <div className="listaProdutos">
      <h1 style={{color: '#820E0E', fontSize: 20, marginBottom: 30}}>Produtos</h1>

    <div className="produtosCadastrados">
      <Link className="add">
        <IoIosAddCircle size="73px" />
        <h1>Adicionar Produto</h1>
      </Link>
      { data.map(e=>{
        //Aqui chamaremos na api, os produtos
        return(
        <div key={e.id} className="produto">
          <BiPackage size="73px" />
          <h1>{e.nome}</h1>
        </div>
        )
        }) }
      </div>
    </div>

      <div className="CardsEstatisticas">

          <div className="cardEst">

              <div className="dirCard">
                <h4>Metas</h4>
                <BiBullseye size="50px" />  
                { meta ? <div><h1>Meta</h1></div> : <span>Nenhuma meta ainda</span> }
                <Link className="addMeta">
                <span><BiLayerPlus /></span>
                <span>Adicionar nova meta</span>
                </Link>
              </div>

              <div className="esqCard">
                <h3>150 R$</h3>
              </div>
          </div>

          <div className="cardEst">
              <div className="dirCard">
                <h4>Produtos mais vendidos</h4>
                
                {data.map(e=>{
                  //Aqui chamaremos da api de estatisticas do produto
                  return(<span>{e.nome}</span>)
                })}
              </div>

              <div className="esqCard">
                <img src={Graph} alt="grafico"/>
              </div>
          </div>
        
      </div>
</div>

</div>
    </>
  );
}
