import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './loginclient.css';
import api from '../../../service/api';

export default function LoginClient() {

  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  async function Autenticar(){
    try{
      const {data} = await api.post('/login', {
        email:email,
        senha:senha
      })

      localStorage.setItem('@BT:usuario', JSON.stringify(data.usuario))
      localStorage.setItem('@BT:token', data.token)
      return window.location.href = "/"
    }catch(error){
      console.log(error);
    }

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
        <Link style={{color: "#FFF"}} to="/"><h3>Sou novo aqui</h3></Link>
        <button onClick={()=>Autenticar()} className="BTNLogin">Entrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
