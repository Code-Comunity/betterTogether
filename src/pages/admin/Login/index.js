import React from 'react';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './login.css';

export default function LoginAdmin() {
  return (
    <>
    <body>
    <div className="loginarea">

      <div className="boxLogin">
      <img src={Logo} alt="betterTogether"/>
      <h3 style={{color: "#FFFF",}}>Login Area</h3>
      
        <div className="inputGroup">

          <div className="inputWIcon">
            <h3><IoMdPerson size="20px" /></h3>
            <input type="text" name="nome"/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="text" name="senha"/>
          </div>
        </div>
        <button className="BTNLogin">Entrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
