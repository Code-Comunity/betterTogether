/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from 'react';
import Navbar from '../../../components/menu/menu';
import Footer from '../../../components/footer/footer';
import {Link} from 'react-router-dom';
//css
import './style.css';
//HEROIMAGE
import hero from '../../../assets/header.png';
//api
import api from '../../../service/api';

export default function Home() {

  //const url = window.location.href;
  //const splitURL = url.split('/');

  //USE STATES

  const [produtos, setProdutos] = useState([]);

  useEffect(()=>{
    
    async function getApi(){
      try{
        const req = await api.get(`/listallprodutos`)

        return setProdutos(req.data.produtos);
      }catch(error){
        console.log(error)
      }
    }
    
    getApi();

  },[])

  return (
    <>
    <div className="home-container">
      <Navbar />
      <header>
        <img src={hero} alt="promotion"/>
      </header>
      <div className="home-content">
        <div className="produtos-container">
          { produtos.map(e => {
            let preco = e.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            return(
              <Link to={`/produto/${e.id_produto}`} >
                  <div key={e.id_produto} className="produtos">
                    <div className="foto-produto-home">
                      <img src={e.img} alt="teste"/> {/* Produto não apresenta imagem, pois a url que vem do back nao funciona no front separado. */}
                    </div>
                    <div className="home-content-produto">
                      <h1>{e.produto}</h1>
                      <p>{preco}</p>
                      <p>12x no cartão</p>
                    </div>
                  </div>
              </Link>
            )
          })}
        </div>     
      </div>
      <Footer />
    </div>
    </>
  );
}
