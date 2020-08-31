import React from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css'
import Logo from '../../../assets/logored.svg';

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
              <h3> -> </h3>
            </div>
          </div>
        </div>

        <div className="funcoes">
              <Link className="itens">home</Link>
              <Link className="itens">produtos</Link>
              <Link className="itens">clientes</Link>
        </div>

        <div className="main">
            <div className="ultimosPedidos">
              <h1 style={{color: '#820E0E'}}>Ultimos pedidos</h1>
              
            <div className="pedidoslista">

              { data.map(e=>{
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
                          <span>{e.local}</span>
                          <span>{e.status}</span>
                        </div>
                        <div className="infoitems">
                          <span>{e.hora}</span>
                          <span>{e.codigo}</span>
                        </div>
                        <div className="infoitems">
                          <span>{e.frete}</span>
                          <span>{e.transportadora}</span>
                        </div>
                      </div>

                      <div className="total">
                        <h1>{e.valorTotal}</h1>
                      </div>
                 
                  </div>

                </div>
                )
              }) }

            </div>

            </div>

        </div>

      </div>
    </>
  );
}
