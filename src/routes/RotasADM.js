import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Dashboard from '../pages/admin/Dashboard';
import EditProdutos from '../pages/admin/EditProdutos';
import Clientes from '../pages/admin/Clientes';
import Produtos from '../pages/admin/Produtos';
import AddProdutos from '../pages/admin/AddProdutos';
//Rotas normais sem autenticação
import Home from '../pages/clientes/Home';
import Produto from '../pages/clientes/Produto';

export default function RotasADM() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path='/editar' component={EditProdutos}/>
        <Route path="/clientes" component={Clientes} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/addprodutos" component={AddProdutos} />

        <Route path="/" exact component={Home} />
        <Route path="/produto" component={Produto} />
      </Switch>
    </Router>
  )
}
