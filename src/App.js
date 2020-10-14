import React from 'react';
import {BrowserRouter as Router,Switch,BrowserRouter} from "react-router-dom";
import './style/global.css';
//Rotas
import Rotas from './routes/index';

import {AuthProvider} from './contexts/auth';

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
     <Router>
            <Switch>
              <Rotas />
            </Switch>
          </Router>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
