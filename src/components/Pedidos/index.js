import React, { useEffect, useState} from 'react';
import api from '../../service/api'
import { BiMap,BiCar, BiPackage } from "react-icons/bi";
import { IoMdCash, IoMdClock,IoMdBarcode,IoMdShareAlt } from "react-icons/io";

import { ItemLista, Nome, Bottom, Infos, InfoItens, Total } from './style'


import data from './api.js'



export default function Pedidos(){


  
//USE STATES

const [pedidos, setPedidos] = useState([]);

    useEffect(()=>{
      
      async function getApi(){
        try{
          const req = await api.get(`/pedido`)
          console.log(req)
          return setPedidos(req.data);
        }catch(error){
          console.log(error)
        }
      }
      getApi();
    },[])

    return(
        <div className="pedidoslista">
        { pedidos.map(e=>{

          //Aqui chamaremos na api, os ultimos pedidos
          return(
          <ItemLista key={e.id}>
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
                    <h3>{e.valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
              </Total>
            </Bottom>

          </ItemLista>
          )
          }) }
        </div>
    )
}