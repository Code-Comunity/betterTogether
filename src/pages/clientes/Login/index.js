import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './loginclient.css';

import Context from '../../../contexts/auth';

export default function LoginClient() {

 const { logado, Autenticar, setEmail, setSenha} = useContext(Context);
 console.log(logado);

  function handleLogin(){
    Autenticar();
  }

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
            <input type="text" name="email" onChange={ e => setEmail(e.target.value) }/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="password" name="senha" onChange={ e => setSenha(e.target.value) }/>
          </div>
        </div>
        <Link style={{color: "#FFF"}} to="/cadastro"><h3>Sou novo aqui</h3></Link>
        <button onClick={()=>handleLogin()} className="BTNLogin">Entrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
