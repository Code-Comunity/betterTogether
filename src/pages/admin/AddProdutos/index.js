import React from 'react';
import { BiFace,BiHomeAlt, BiPackage } from "react-icons/bi";
import { IoIosExit} from "react-icons/io";
import {Link} from 'react-router-dom';
import './style.css'
import Logo from '../../../assets/logored.svg';


export default function AddProdutos() {
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

    <div className="addProdutos">
      <div className="left">
        <input type="text" placeholder="Digite o código do produto"/>

        <input type="text" placeholder="Digite o nome do produto"/>

        <input type="text" placeholder="Digite o preço do produto"/>

        <textarea name="descricao" id="desc" cols="30" rows="10" placeholder="Descreva um pouco sobre o produto ou serviço que
        você está vendendo." >
        </textarea>
      </div>

      <div className="right">
        <input type="file" name="addimgprodut" id="addimgprodut"/>
        <button>Adicionar</button>
      </div>
      
    </div>

</div>
</div>
    </>
  );
}
