import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './menu.css';
import Logo from '../../assets/logowhite.svg';

//imagens
import Perfil from '../../assets/testeperfil.png';

//Context
import Context from '../../contexts/auth';

//Modal
import Modal from '../ModalCarrinho/modalCarrinho';

export default function Menu(){

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ menuopen, setMenuOpen ] = useState(false) //False = fechado True = aberto
  const { logado, usuario } = useContext(Context);

  function Deslogar(){
    localStorage.clear();
    return window.location.href = "/"
  }

  useEffect(()=>{ 
    const menu = document.getElementById("res-menu")
    const btn = document.getElementById("iconeMenu")
    const carrinho = document.getElementById("btnNav")
    const menuAberto = document.getElementById("menuAberto")
    const menuFechado = document.getElementById("menuFechado")

    if(isModalVisible === true) {
      menu.checked = false;
    } 

    carrinho.addEventListener('click',()=>{
      if(menuopen === true){
        menuAberto.style.display = "none";
        menuFechado.style.display = "block";
        setMenuOpen(false);
      }else{
        menuAberto.style.display = "none";
        menuFechado.style.display = "block";
        setMenuOpen(true);
      }
    })

    const btnmenu = document.getElementById("btnMenu")
    
    

btnmenu.addEventListener('click', ()=>{

    if(menuopen === false){
        menuAberto.style.display = "block";
        menuFechado.style.display = "none";
        setMenuOpen(true);
    }else{
      menuAberto.style.display = "none";
      menuFechado.style.display = "block";
      setMenuOpen(false);
    }
  })



  },[isModalVisible, menuopen])



  return (
    <>
      <nav className="menu-responsivo">
        <input type="checkbox" id="res-menu"/>
        <label htmlFor="res-menu">
        <div id="btnMenu">
          <i id="menuAberto" >&#9932;</i>
          <i id="menuFechado">&#9776;</i>
        </div>
        

        </label>
         
        <ul style={{overflow: "hidden"}}>
          <div>
            <li><Link to='/' ><img src={Logo} alt="Logo"/></Link></li>
            <li><Link> Sobre </Link></li>
            <li><Link onClick={() => setIsModalVisible(true)} className="btnNav" id="btnNav" to="#"> Carrinho </Link></li>
          
          { logado ? (
            <div>
              <li><li><Link onClick={()=>Deslogar()} > Deslogar </Link></li></li>
              <li><li><Link to="/perfil" > Perfil </Link></li></li>
              <div className="circle">
                  <img src={Perfil} alt="Perfil foto"/>
              </div>
            </div> 
           ) : (
            <div>
              <li><Link to="/login"  > Logar </Link></li>
              <li><Link to="/cadastro" > Cadastrar </Link></li>
            </div>
          )}
          </div>
        </ul>
      </nav>

      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
      </>
  );
}