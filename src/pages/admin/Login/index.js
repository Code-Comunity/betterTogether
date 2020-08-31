import React from 'react';
import Logo from '../../../assets/logored.svg';
import './login.css';

export default function LoginAdmin() {
  return (
    <>
    <body>
    <div className="loginarea">

      <div className="boxLogin">
      <img src={Logo} alt="betterTogether"/>
      <h3 style={{color: "#820E0E",}}>Login Area</h3>
      
        <div className="inputGroup">

          <div className="inputWIcon">
            <h3>N</h3>
            <input type="text" name="nome"/>
          </div>

          <div className="inputWIcon">
            <h3>S</h3>
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
