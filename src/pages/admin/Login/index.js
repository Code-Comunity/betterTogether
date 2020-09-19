import React, {useState} from 'react';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './login.css';

import api from '../../../service/api';

export default function LoginAdmin() {

  const [ emailAdmin, setEmailAdmin ] = useState('')
  const [ senhaAdmin, setSenhaAdmin ] = useState('')

  async function Login(){
    try{
      const {data} = await api.post('/admin/login', {
        email: emailAdmin,
        senha: senhaAdmin
      })
      
      //Salvar no storage
      localStorage.setItem('@btgther/token', JSON.stringify(data.token));
      localStorage.setItem('@btgther/usuario', JSON.stringify(data.usuario));

      return window.location.href = "/dashboard"
    }catch(error){
      console.log(error)
    }
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
            <input type="text" name="senha" onChange={(e)=>setSenhaAdmin(e.target.value)}/>
          </div>
        </div>
        <button onClick={()=> Login()} className="BTNLogin">Entrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
