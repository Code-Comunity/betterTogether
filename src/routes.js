import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Rotas de admin
import LoginAdmin from './pages/admin/Login';

//Rotas de usuario comum
import Home from './pages/clientes/Home'
import Contato from './pages/clientes/Contato'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/loginadmin" component={LoginAdmin} />

        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}