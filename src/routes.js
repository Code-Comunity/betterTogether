import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Rotas de admin
import LoginAdmin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AddProdutos from './pages/admin/AddProdutos';
import Produtos from './pages/admin/Produtos';
import Clientes from './pages/admin/Clientes';
import EditProdutos from './pages/admin/EditProdutos'


//Rotas de usuario comum
import Home from './pages/clientes/Home';
import Produto from './pages/clientes/Produto';
import Sobre from './pages/clientes/Sobre';
import LoginClient from './pages/clientes/Login';
import Registro from './pages/clientes/Cadastro';
import Perfil from './pages/clientes/Perfil/index';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto" component={Produto} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/login" component={LoginClient} />
        <Route path="/cadastro" component={Registro} />
        <Route path="/perfil" component={Perfil} />

        <Route path="/loginadmin" component={LoginAdmin} />       
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addprodutos" component={AddProdutos} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/clientes" component={Clientes} />
        <Route path='/editar' component={EditProdutos}/>
        
      </Switch>
    </BrowserRouter>
  );
}