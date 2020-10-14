import React from 'react';
import { BiMap,BiCar, BiPackage } from "react-icons/bi";
import { IoMdCash, IoMdClock,IoMdBarcode,IoMdShareAlt } from "react-icons/io";

import { ItemLista, Nome, Bottom, Infos, InfoItens, Total } from './style'


import data from './api.js'

export default function Pedidos(){
    return(
        <div className="pedidoslista">
        { data.map(e=>{

          //Aqui chamaremos na api, os ultimos pedidos
          return(
          <ItemLista>
            <div >
              <Nome>
              <h2 style={{marginRight:10}}>{e.thumb}</h2>
              <h3 style={{color: '#820E0E'}}>{e.nome}</h3>
              </Nome>
            </div>

            <Bottom>
            <Infos>
                <InfoItens>
                    <span><BiMap />{e.local}</span>
                    <span><BiPackage />{e.status}</span>
                </InfoItens>
                <InfoItens>
                    <span><IoMdClock />{e.hora}</span>
                    <span><IoMdBarcode />{e.codigo}</span>
                </InfoItens>
                <InfoItens>
                    <span><IoMdShareAlt />{e.frete}</span>
                    <span><BiCar />{e.transportadora}</span>
                </InfoItens>
                </Infos>
              <Total>
                    <IoMdCash size="25px" color="green"/>
                    <h3>{e.valorTotal}</h3>
              </Total>
            </Bottom>

          </ItemLista>
          )
          }) }
        </div>
    )
}