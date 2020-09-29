import React,{ createContext, useState, useEffect } from 'react';
import api from '../service/api';

const Context = createContext({ logado: false, usuario: {} });

export function AuthProvider({children}){
  //Variaveis de Estado
  const [ usuario, setUsuario ] = useState(null);
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ emailAdmin, setEmailAdmin ] = useState('')
  const [ senhaAdmin, setSenhaAdmin ] = useState('')

 

  function verify(){
    const usuario = localStorage.getItem('@btgther/usuario')
    const token = localStorage.getItem('@btgther/token')
    if(usuario && token){
      setUsuario(JSON.parse(usuario));
    }
  }

  function verifyAdm(){
    const usuario = localStorage.getItem('@btgther/usuarioADM')
    const token = localStorage.getItem('@btgther/tokenADM')
    if(usuario && token){
      setUsuario(JSON.parse(usuario));
    }
  }

  useEffect(()=>{
    verify();
    verifyAdm();
  },[])

  //Função de Login
  async function Autenticar(){
    try{
      const {data} = await api.post('/login', {
        email:email,
        senha:senha
      })

      localStorage.setItem('@btgther/usuario', JSON.stringify(data.usuario))
      localStorage.setItem('@btgther/token', data.token)
      return window.location.href = "/"
    }catch(error){
      console.log(error);
    }
  }

  async function AutenticarAdm(){
    try{
      const {data} = await api.post('/admin/login', {email:emailAdmin, senha: senhaAdmin})

      localStorage.setItem('@btgther/usuarioADM', JSON.stringify(data.usuario))
      localStorage.setItem('@btgther/tokenADM', data.token)

      return window.location.href = "/dashboard";


    }catch(error){
      console.log(error)
    }
  }

  return(
    <Context.Provider value={{logado:!!usuario,usuario,Autenticar,AutenticarAdm,setEmail,setSenha,setSenhaAdmin,setEmailAdmin}}>
      {children}
    </Context.Provider>
  );
}

export default Context;