/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect, useHistory} from "react-router-dom";

import LoginClient from '../pages/clientes/Login';
import LoginAdmin from '../pages/admin/Login';
import Registro from '../pages/clientes/Cadastro';
import Home from '../pages/clientes/Home';
import Produto from '../pages/clientes/Produto';
import Context from '../contexts/auth';

export default function NaoAutenticado(){

  const { logado } = useContext(Context);


  const history = useHistory();
  useEffect(()=>{


    const adm = localStorage.getItem('@btgther/usuarioADM')
    const snhAdm = localStorage.getItem('@btgther/tokenADM')

    const url = window.location.href;
    const splitURL = url.split('/');

      if(!adm && !snhAdm){
        if(splitURL[3] === 'dashboard'){
          return history.goBack('/')
        }
        if(splitURL[3] === 'produtos'){
          return history.goBack('/')
        }
        if(splitURL[3] === 'clientes'){
          return history.goBack('/')
        }
        if(splitURL[3] === 'editar'){
          return history.goBack('/')
        }
        if(splitURL[3] === 'addprodutos'){
          return history.goBack('/')
        }
      }
    },[])


  return(
    <Router>
      {console.log("Rota de Nao autenticado")}

      { !!logado ?  <Redirect path="/" component={Home} /> : <Switch></Switch> }
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginClient} />
        <Route path="/cadastro" component={Registro} />
        <Route path="/admin/login" component={LoginAdmin} />
        <Route path="/produto" component={Produto} />
      </Switch>
    </Router>
  )

}