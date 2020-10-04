import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Css
import './menu.css';

//Imagens
import Perfil from '../../assets/testeperfil.png';
import Logo from '../../assets/logowhite.svg';
import {FaInfoCircle, FaShoppingCart} from 'react-icons/fa';

//Modal
import Modal from '../ModalCarrinho/modalCarrinho';
import { useState } from 'react';

//Context
import Context from '../../contexts/auth';
import { IoIosLogIn, IoIosLogOut,IoIosPerson, IoMdPersonAdd } from 'react-icons/io';

export default function Navbar() {

  const { logado, usuario } = useContext(Context);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function Deslogar(){
    localStorage.clear();
    return window.location.href = "/"
  }
  return (
    <>
      <nav>
        
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
                      
                      <Link onClick={() => setIsModalVisible(true)} className="btnNav" to="#">
                        <div className="buttonNav">               
                              <h4>Carrinho</h4> 
                              <FaShoppingCart />
                        </div>
                      </Link>               
                         
                 </div>       
                 { logado ? ( <div className="perfil">
              <h4>{usuario.nome}</h4>
              <div className="circle">
                <img src={Perfil} alt="Perfil foto"/>
              </div>

              <div className="dropdown">
                <Link className="Links" to="#" onClick={()=>Deslogar()}> <IoIosLogOut /> Deslogar</Link>
                <Link className="Links" to="/perfil"> <IoIosPerson /> Perfil</Link>
              </div>

            </div> ) : ( 
            
            <div className="loginEcadastro"> 
              <Link className="BotoesLogin" to="/login"> <IoIosLogIn size="15px" />  Logar</Link>
              <Link className="BotoesLogin" to="/cadastro"> <IoMdPersonAdd size="25px" /> Cadastrar</Link> 
            </div>

             )}           
             
        </div>        
      </nav>
       {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
    </>
  );
}
