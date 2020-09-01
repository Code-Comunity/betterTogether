import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Rotas de admin
import LoginAdmin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AddProdutos from './pages/admin/AddProdutos';
import Clientes from './pages/admin/Clientes';


//Rotas de usuario comum
import Home from './pages/clientes/Home'
import Contato from './pages/clientes/Contato'
import LoginClient from './pages/clientes/Login';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/loginadmin" component={LoginAdmin} />
        <Route path="/contato" component={Contato} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginClient} />
        <Route path="/addprodutos" component={AddProdutos} />
        <Route path="/clientes" component={Clientes} />
      </Switch>
    </BrowserRouter>
  );
}