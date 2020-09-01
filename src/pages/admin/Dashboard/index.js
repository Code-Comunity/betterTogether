import React from 'react';
import { BiFace,BiHomeAlt,BiDollarCircle,BiMap,BiCar, BiPackage } from "react-icons/bi";
import { IoMdCalendar,IoIosExit,IoMdCash, IoMdClock,IoMdBarcode,IoMdShareAlt } from "react-icons/io";
import {Link} from 'react-router-dom';
import './dashboard.css'
import Logo from '../../../assets/logored.svg';
import Graph from '../../../assets/Dashboard/graph.svg';

import data from './api.js'

export default function Dashboard() {
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
            <div className="ultimosPedidos">
              <h1 style={{color: '#820E0E', fontSize: 20}}>Ultimos pedidos</h1>

            <div className="pedidoslista">
              { data.map(e=>{

                //Aqui chamaremos na api, os ultimos pedidos
                return(
                <div key={e.id} className="itemLista">
                  <div className="top">
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
                        <h3>150 R$</h3>
                      </div>
                  </div>

                  <div className="cardEst">
                        <div className="dirCard">
                          <h4>Saldo</h4>
                          <BiDollarCircle size="30px"/>
                        </div>

                        <div className="esqCard">
                          <h3>1,500,00 R$</h3>
                        </div>
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
