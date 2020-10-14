import React, {useState,useEffect} from 'react';
import RotasADM from './RotasADM';
import RotasClientes from './RotasClientes';

export default function RotaAutenticado(){

  const [isAdmin, setIsadmin] = useState(false);

  useEffect(()=>{

  const adm = localStorage.getItem('@btgther/usuarioADM')
  const snhAdm = localStorage.getItem('@btgther/tokenADM')

    if(adm && snhAdm){
      setIsadmin(true)
      console.log('autenticado como adm')
    }else{
      setIsadmin(false)
      console.log('autenticado como cliente')
    }
  },[])
  return (isAdmin ? <RotasADM /> : <RotasClientes />)
}