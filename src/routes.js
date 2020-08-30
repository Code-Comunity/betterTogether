import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Rotas de admin
import LoginAdmin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

//Rotas de usuario comum
import Home from './pages/clientes/Home'
import LoginClient from './pages/clientes/Login';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/loginadmin" component={LoginAdmin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginClient} />
        
      </Switch>
    </BrowserRouter>
  );
}