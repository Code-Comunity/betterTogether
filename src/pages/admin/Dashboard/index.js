import React, { useEffect,useState } from 'react';
import { BiFace,BiHomeAlt,BiDollarCircle,BiMap,BiCar, BiPackage } from "react-icons/bi";
import { IoMdCalendar,IoIosExit,IoMdCash, IoMdClock,IoMdBarcode,IoMdShareAlt } from "react-icons/io";
import {Link} from 'react-router-dom';
import './dashboard.css'
import Logo from '../../../assets/logored.svg';
import Graph from '../../../assets/Dashboard/graph.svg';

import data from './api.js'
import api from '../../../service/api';


export default function Dashboard() {

  const [ usuarioLogado , setUsuarioLogado ] = useState([])
  const [ saldo, setSaldo ] = useState([])
  const [ pedidos, setPedidos ] = useState([]) //Todas as transações
  const [ recebivel, setRecebivel ] = useState([])

  useEffect(()=>{
    
    async function getApi(){
      try{
        const req = await api.get(`/pagarme-todastransacoes`)
        console.log(req)
        return setPedidos(req);
      }catch(error){
        console.log(error)
      }
    }
    getApi();
  },[])
  console.log(pedidos.data)  


  useEffect(()=>{
    async function buscaUser(){
      try{
        const usuarioLogado = JSON.parse(localStorage.getItem('@btgther/usuarioADM'));

        setUsuarioLogado(usuarioLogado);
      }catch(error){
        console.log(error)
      }
    }

    async function buscaSaldo(){
      try{
        const {data} = await api.get('/pagarme-total')

        const { available } = data;
        setSaldo(data);
        
      }catch(error){
        console.log(error)
      }
    }

    async function TodasTransactions(){
      try{
        const {data} = await api.get('/pagarme-todastransacoes')
        setPedidos(data.transactions);
      }catch(error){
        console.log(error)
      }
    }
    async function BuscaRecebiveis(){
      try {
        const {data} = await api.get('/pagarme-recebiveis')
        setRecebivel(data.recipients[0].id)
      } catch (error) {
        console.log(error)
      }
    }

    BuscaRecebiveis();
    TodasTransactions()
    buscaSaldo()
    buscaUser()
  },[])
  function Deslogar(){
    localStorage.clear();
    return window.location.href = "/"
  }

  async function Estornar(prop){
    try {
      const { retorno } = await api.post(`/pagarme-estorno/${prop}`)
      alert(retorno)
    } catch (error) {
      console.log(error);
    }
  }

  async function Sacar(amount, id){
    console.log(amount)
    console.log(id)
    const dadosSaque = {
      amount: amount,
      id: id
    }
    console.log(dadosSaque)
    try {
      await api.post('/pagarme-sacar',dadosSaque)
    } catch (error) {
      console.log(error)
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
            <div className="ultimosPedidos">
              <h1 style={{color: '#820E0E', fontSize: 20}}>Ultimos pedidos</h1>

            <div className="pedidoslista">

              {/** USAR a variavel de estado pedidos em vez do data, ficando assim pedidos.map()
               * mas atentar-se ao objeto retornado, alguns possuem objetos dentro de objetos
               * e arrays dentro do objeto, portanto possivelmente precise de um map dentro de um map...
               */}

           

              { data.map(e=>{
                //Aqui chamaremos na api, os ultimos pedidos
                return(
                <div key={e.id} className="itemLista">
                  <div className="top">
                    <button onClick={()=>Estornar(e.id)}>Realizar Estorno</button>
                    <div className="nome">
                    <h2 style={{marginRight:10}}>{e.thumb}</h2>
                    <h3 style={{color: '#820E0E'}}>{e.nome}</h3>
                    </div>
                  </div>

                  <div className="bottom">
                  <div className="infos">
                      <div className="infoitems">
                          <span><BiMap />{e.local}</span>
                          <span><BiPackage />{e.status}</span>
                      </div>
                  <div className="infoitems">
                          <span><IoMdClock />{e.hora}</span>
                          <span><IoMdBarcode />{e.codigo}</span>
                      </div>
                    <div className="infoitems">
                        <span><IoMdShareAlt />{e.frete}</span>
                        <span><BiCar />{e.transportadora}</span>
                    </div>
                      </div>
                    <div className="total">
                          <IoMdCash size="25px" color="green"/>
                          <h3>{e.valorTotal}</h3>
                    </div>
                  </div>

                </div>
                )
                }) }
              </div>
            </div>

              <div className="CardsEstatisticas">

                  <div className="cardEst">

                      <div className="dirCard">
                        <h4>Rendimento Mensal</h4>
                        <IoMdCalendar size="30px" />
                      </div>

                      <div className="esqCard">
                        { saldo.waiting_funds ? <h3>{saldo.waiting_funds.amount}</h3> : <h3>"sem fundos</h3> }
                      </div>
                  </div>
                  

                  <div className="cardEst1">
                    <div className="saldoDisponivel">
                    <div className="dirCard">
                          <h4>Saldo Disponível</h4>
                          <BiDollarCircle size="30px"/>
                        </div>

                        <div className="esqCard">
                          { saldo.available ? <h3>{saldo.available.amount}</h3> : <h3>"Sem fundos para sacar"</h3> }
                        </div>
                    </div>
                        
                        <button className="btnTransfer" onClick={()=>Sacar(saldo.waiting_funds.amount,recebivel)} >Sacar</button>
                      
                  </div>

                  <div className="cardEst">
                      <div className="dirCard">
                        <h4>Público comum</h4>
                        <h5 style={{marginTop:10, marginBottom: 10 }}>Feminino</h5>
                        <h5>Masculino</h5>
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
