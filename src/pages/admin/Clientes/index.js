import React, { useEffect, useState } from 'react';
import { BiFace,BiHomeAlt,BiPackage, BiBeenHere,BiMailSend,BiPhone, BiDollarCircle } from "react-icons/bi";
import { IoMdCalendar,IoIosExit } from "react-icons/io";
import {Link} from 'react-router-dom';
import './clientes.css'
import Logo from '../../../assets/logored.svg';

import api from '../../../service/api';

export default function Clientes() {

  //State
  const [usuarioLogado , setUsuarioLogado ] = useState([])
  const [saldo, setSaldo] = useState([]);

  useEffect(() => {
    async function buscaUser() {
      try {
        const usuarioLogado = JSON.parse(
          localStorage.getItem("@btgther/usuarioADM")
        );

        setUsuarioLogado(usuarioLogado);
      } catch (error) {
        console.log(error);
      }
    }

    async function buscaSaldo() {
      try {
        const { data } = await api.get("/mostrarsaldo");
        setSaldo(data);
      } catch (error) {
        console.log(error);
      }
    }
    buscaSaldo();
    buscaUser();
  }, []);

  const [ clientes, setClientes ] = useState([])

    useEffect(()=>{

      async function getClientes(){
        try{
          const {data} = await api.get('/listCliente');
          //console.log(data.clientes)
          return setClientes(data.clientes)

        }catch(error){
          console.log(error)
        }
      }

      getClientes();
    },[])



    function Deslogar(){
      localStorage.clear();
      return window.location.href = "/"
    }

  return (
    <>
            <div className="Dashboard">

<div className="header">
  <div className="esquerda">
    <img src={Logo} alt="LogoDashboard"/>
  </div>
  <div className="direta">
    <div className="perfilDash">
      <div className="circleDash"></div>
      <h2>{usuarioLogado.nome}</h2>
      <h3> <IoIosExit className="exitbtn" size="23px" color="#820E0E" onClick={()=>Deslogar()} /> </h3>
    </div>
  </div>
</div>

<div className="funcoes">
      <Link to="/dashboard" className="itens"> <BiHomeAlt size="30px"/> </Link>
      <Link to="/produtos" className="itens"> <BiPackage size="30px"/> </Link>
      <Link to="/clientes" className="itens"> <BiFace size="30px"/> </Link>
</div>

<div className="main">
    <div className="ultimosPedidos">
      <h1 style={{color: '#820E0E', fontSize: 20}}>Clientes</h1>

    <div className="pedidoslista">
<div className="scrollPage">
      { clientes.map(e=>{

        //Aqui chamaremos na api, dos clientes cadastrados no banco
        return(
          <div className="clienteItem">
            <div className="clientePerfil">
                  <div className="thumbCliente">
                    <h3>{e.img}</h3>
                  </div>
                    <h3>{e.nome}</h3>
            </div>
            <div className="clienteInformacoes">
                <div className="infos1">
                  <span><BiBeenHere /> {e.cep}</span>
                  <span><BiMailSend />{e.email}</span>
                </div>
                <div className="infos2">
                  <span><BiPhone />71 985429908</span>
                  <span><BiPhone />71 985429908</span>
                </div>
            </div>
              
          </div>
        )
      }) }
</div>
      </div>
    </div>

    <div className="CardsEstatisticas">
            <div className="cardEst">
              <div className="dirCard">
                <h4>Rendimento Mensal</h4>
                <IoMdCalendar size="30px" />
              </div>

              <div className="esqCard">
                {saldo.waiting_funds ? (
                  <h3>{saldo.waiting_funds.amount}</h3>
                ) : (
                  <h3>"sem fundos</h3>
                )}
              </div>
            </div>

            <div className="cardEst1">
              <div className="saldoDisponivel">
                <div className="dirCard">
                  <h4>Saldo Disponível</h4>
                  <BiDollarCircle size="30px" />
                </div>

                <div className="esqCard">
                  {saldo.available ? (
                    <h3>{saldo.available.amount}</h3>
                  ) : (
                    <h3>"Sem fundos para sacar"</h3>
                  )}
                </div>
              </div>

              <button
                className="btnTransfer"
                onClick={() => alert("Criar função de transferencia")}
              >
                Sacar
              </button>
            </div>

            <div className="cardEst">
              <div className="dirCard">
                <h4>Público comum</h4>
                <h5 style={{ marginTop: 10, marginBottom: 10 }}>Feminino</h5>
                <h5>Masculino</h5>
              </div>
              <div className="esqCard">
                
              </div>
            </div>
          </div>
</div>
</div>
    </>
  );
}
