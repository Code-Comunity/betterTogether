import React from 'react';
import { Link } from 'react-router-dom';

//Css
import './menu.css';

//Imagens
import Perfil from '../../assets/testeperfil.png';
import Logo from '../../assets/logowhite.svg';
//import {IoMdCart} from 'react-icons/io';
import {FaInfoCircle, FaShoppingCart} from 'react-icons/fa';

//Modal
import Modal from '../ModalCarrinho/modalCarrinho';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar() {
  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  //Menu responsivo
  useEffect(()=>{
    let show = true;

    const menuSection = document.querySelector(".nav")
    const menuToggle = menuSection.querySelector(".menu-toggle")
  
    menuToggle.addEventListener("click", () =>{
      document.body.style.overflow = show? "hidden" : "initial";

      menuSection.classList.toggle("on", show)
      show = !show;
    })
  },[]);

  

  return (
    <>
      <div className="nav">
        
        <div className="ladoEsquerdo">
        <Link to='/' ><img src={Logo} alt="Logo"/></Link>
        </div>
        <div className="ladoDireito">
                  
                  <div className="botoes">
                      <Link to="/sobre" className="btnNav">
                        <div className="buttonNav">                        
                              <h4>Sobre</h4>
                              <FaInfoCircle />                        
                        </div>
                      </Link>
                      
                      <Link onClick={() => setIsModalVisible(true)} className="btnNav">
                        <div className="buttonNav">               
                              <h4>Carrinho</h4> 
                              <FaShoppingCart />
                        </div>
                      </Link>                  
                 </div>                  
            <div className="perfil">
              <h4>Maria Silva</h4>
              <div className="circle">
                <img src={Perfil} alt="Perfil foto"/>
              </div>
            </div>
        </div>
   
          <div className="menu-toggle" >
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>            
          </div>  

      </div>
       {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}

    </>
  );
}
