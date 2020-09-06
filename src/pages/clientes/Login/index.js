import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './loginclient.css';

export default function LoginClient() {
  return (
    <>
    <body>
    <div className="loginarea">

      <div className="boxLogin">
      <img src={Logo} alt="betterTogether"/>
      <h3 style={{color: "#FFF",}}>Faça seu login!</h3>
      
        <div className="inputGroup">

          <div className="inputWIcon">
            <h3><IoMdPerson size="20px" /></h3>
            <input type="text" name="email"/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="password" name="senha"/>
          </div>
        </div>
        <Link style={{color: "#FFF"}} to="/"><h3>Sou novo aqui</h3></Link>
        <button className="BTNLogin">Entrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
