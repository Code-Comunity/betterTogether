import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { IoMdPerson,IoIosFingerPrint } from "react-icons/io";
import Logo from '../../../assets/logowhite.svg';
import './cadastro.css';
import api from '../../../service/api';

export default function Registro() {


  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ cep, setCep ] = useState('');
  const [ img, setImg ] = useState();

  async function Cadastrar(){
    try{
     const {data} = await api.post('/cadastrarCliente',{
      nome:nome,
      email:email,
      senha:senha,
      cep:cep,
      img: img
     })

     alert(`Voce foi cadastrado, seu nome: ${nome}`);
     return window.location.href = "/"
    }
    catch(error){ //DEBUG do ERRO
      console.log('Houve erro!')
    }
   }



  return (
    <>
  <body>
    <div className="cadastroArea">

      <div className="boxLogin">
      <img src={Logo} alt="betterTogether"/>
      <h3 style={{color: "#FFF",}}>Faça seu cadastro!</h3>
      
        <div className="inputGroup">

          <div className="inputWIcon">
            <h3><IoMdPerson size="20px" /></h3>
            <input type="text" name="nome" placeholder="Digite seu nome" onChange={ e => setNome(e.target.value) }/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="email" name="email" placeholder="Digite aqui o seu email" onChange={ e => setEmail(e.target.value) }/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="password" name="senha" placeholder="******" onChange={ e => setSenha(e.target.value) }/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="text" name="cep" placeholder="digite seu CEP" onChange={ e => setCep(e.target.value) }/>
          </div>

          <div className="inputWIcon">
            <h3><IoIosFingerPrint size="20px" /></h3>
            <input type="file" name="foto" placeholder="digite seu CEP" onChange={ e => setImg(e.target.files[0]) }/>
          </div>

        </div>
        <button onClick={()=>Cadastrar()} className="BTNLogin">Cadastrar</button>
      </div>
       
      </div>
    </body>
    </>
  );
}
