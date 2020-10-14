import React, {useContext} from 'react';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './login.css';

import Context from '../../../contexts/auth';

export default function LoginAdmin() {



  const { AutenticarAdm,setSenhaAdmin,setEmailAdmin } = useContext(Context)

  function Logar(){
    AutenticarAdm();
  }

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
            <input type="text" name="nome" onChange={(e)=>setEmailAdmin(e.target.value)}/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="password" name="senha" onChange={(e)=>setSenhaAdmin(e.target.value)}/>
          </div>
        </div>
        <button onClick={()=>Logar()} className="BTNLogin">Entrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
