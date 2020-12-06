/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {BrowserRouter as Router,Switch,Route,useHistory} from "react-router-dom";
// Paginas
import Home from '../pages/clientes/Home';
import Produto from '../pages/clientes/Produto';
import Contato from '../pages/clientes/Contato';
import Sobre from '../pages/clientes/Sobre';
import Perfil from '../pages/clientes/Perfil';
import Comprar from '../pages/clientes/Compra';
import AlterDados from '../pages/clientes/AlteraDados';

export default function RotasClientes() {
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

  return (
    <Router>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto" component={Produto} />
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/alterdados" component={AlterDados} />
        <Route path="/compra" component={Comprar} />
    </Switch>
    </Router>
  )
}
