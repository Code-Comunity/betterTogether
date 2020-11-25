/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { BiFace,BiHomeAlt, BiPackage } from "react-icons/bi";
import { IoIosExit} from "react-icons/io";
import {Link} from 'react-router-dom';
import './style.css'
import Logo from '../../../assets/logored.svg';

import api from '../../../service/api';


export default function EditProdutos() {

  const [ nomeProduto, setNomeProduto ] = useState('');
  const [ estoque, setEstoque ] = useState('');
  const [ preco, setPreco ] = useState('');
  const [ descricao, setDescricao ] = useState('');
  const [ imagem, setImagem ] = useState('');

  const url = window.location.href;
  const splitURL = url.split('/');


  const [usuarioLogado , setUsuarioLogado ] = useState([])

  useEffect(()=>{
    async function buscaUser(){
      try{
        const usuarioLogado = JSON.parse(localStorage.getItem('@btgther/usuarioADM'));

        setUsuarioLogado(usuarioLogado);
      }catch(error){
        console.log(error)
      }
    }

    buscaUser()
  },[])

  useEffect(()=>{

      async function GetDados(){
        
        try{ 
          const {data} = await api.get(`/produto/${splitURL[4]}`)
          console.log(data[0])
          setNomeProduto(data[0].produto)
          setEstoque(data[0].estoque)
          setPreco(data[0].preco)
          setDescricao(data[0].descrisao)
          setImagem(data[0].images)


        }catch(error){  
          console.log(error)
        }

      }

      GetDados()

  },[])

  function Deslogar(){
    localStorage.clear();
    return window.location.href = "/"
  }


  async function Atualizar(){
    try{
    const data = new FormData;

        data.append("id", splitURL[4])
        data.append("produto", nomeProduto )
        data.append("descrisao", descricao)
        data.append("preco",preco)
        data.append("estoque", estoque)
        data.append("images", imagem)

       await api.put(`/produto`, data)
        return window.location.href = "/"
    }catch(e){
      console.error(e)
    }
    

  }

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
      <h2>{usuarioLogado.nome}</h2>
      <h3> <IoIosExit className="exitbtn" size="23px" color="#820E0E" onClick={()=>Deslogar()} /> </h3>
    </div>
  </div>
</div>

<div className="funcoes">
      <Link to="/dashboard" className="itens"> <BiHomeAlt size="30px"/> </Link>
      <Link to="/produtos" className="itens"> <BiPackage size="30px"/> </Link>
      <Link to="/clientes" className="itens"> <BiFace size="30px"/> </Link>
</div>

<div className="main">

    <div className="addProdutos">
      <div className="left">

        <input type="text" value={nomeProduto} placeholder="Digite o nome do produto" onChange={(e)=>setNomeProduto(e.target.value)}/>
        <input type="text" value={estoque} placeholder="Digite o estoque do produto" onChange={(e)=>setEstoque(e.target.value)}/>
        <input type="text" value={preco} placeholder="Digite o preço do produto" onChange={(e)=>setPreco(e.target.value)}/>

        <textarea name="descricao" id="desc" cols="30" rows="10" placeholder="Descreva um pouco sobre o produto ou serviço que
        você está vendendo." value={descricao} onChange={(e)=>setDescricao(e.target.value)} >
        </textarea>
      </div>

      <div className="right">
        <img className="imgProduto" src={imagem} alt="Imagem do produto"/>
        <input type="file" name="addimgprodut" id="addimgprodut" onChange={(e)=>setImagem(e.target.files[0])}/>
        <button onClick={()=>Atualizar()}>Adicionar</button>
      </div>
      
    </div>

</div>
</div>
    </>
  );
}
