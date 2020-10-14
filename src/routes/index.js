import React, {useContext} from 'react';

import Context from '../contexts/auth';
import RotaAutenticado from './RotasAutenticado';
import NaoAutenticado from './RotasNaoAutenticado';

function Rotas(){
  const { logado } = useContext(Context);
  return logado ? <RotaAutenticado /> : <NaoAutenticado />
}

export default Rotas;