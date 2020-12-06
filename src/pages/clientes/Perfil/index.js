import React,{useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Context from '../../../contexts/auth';

//Styles
import { Header, Container, Conteudo, DireitaHeader, CentroHeader, Direita, Esquerda, Botao, Botao2 } from './styles';

//Componentes
import Navbar from '../../../components/menu/menu';
import Footer from '../../../components/footer/footer';



//imagens e icons
import PerfilFoto from '../../../assets/perfilgrande.png';

import { IoIosCube } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { BiFace,BiHomeAlt,BiDollarCircle,BiMap,BiCar, BiPackage } from "react-icons/bi";
import { IoMdCalendar,IoIosExit,IoMdCash, IoMdBarcode,IoMdShareAlt } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { BsCalendarFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

import api from '../../../service/api';


export default function Perfil(){

    const { usuario } = useContext(Context);
    const [ pedidos, setPedidos ] = useState([]) 

    useEffect(()=>{
        
        async function getApi(){
        try{
            const req = await api.get('/pagarme-todastransacoes')
        
            setPedidos(req.data.map(pedidos=>pedidos));
            
            return
        }catch(error){
            console.log(error)
        }
        }
        getApi();
    },[])

    return(
        <>
            <Navbar />
            <Container>
                <Header>
                    <DireitaHeader>
                        <div>
                            <h1>{usuario.nome}</h1>
                            <h3>{usuario.email}</h3>
                        </div>
                    </DireitaHeader>
                    <CentroHeader>
                        <img src={PerfilFoto} alt="perfil" />
                    </CentroHeader>
                </Header>
                <Conteudo>
                    <Esquerda>
                        <Botao>
                            <Link>
                                <IoIosCube />
                                <h3>Pedidos</h3>
                            </Link>
                        </Botao>
                        <Botao2>
                            <Link to="/alterdados">
                                <FaUserCircle />
                                <h3>Alterar dados</h3>
                            </Link>
                        </Botao2>
                    </Esquerda>
                    <Direita>
                        <h1>Pedidos:</h1>
                        <div className="pedidoslista" style={{overflow:"auto", maxHeight:"450px"}} >
                            { pedidos.map(e=>{
                                return(
                                <div key={e.id} className="itemLista">
                                <div className="top">
                                    <div className="nome">
                                    <h2 style={{marginRight:10}}>{/*e.thumb*/}</h2>
                                    <h3 style={{color: '#820E0E'}}>{ e.customer.name }</h3>
                                    </div>
                                </div>

                                <div className="bottom">
                                <div className="infos">
                                    <div className="infoitems">
                                        <span><BiMap />{e.shipping.city}</span>
                                        <span><GrStatusGood />{e.status}</span>
                                    </div>
                                <div className="infoitems">
                                        <span><FaBoxOpen />{e.items.map(e=>(e.title))}</span>
                                        <span><IoMdBarcode />{e.codigo}</span>
                                    </div>
                                    <div className="infoitems">
                                        <span><BsCalendarFill />{e.shipping.delivery_date}</span>
                                        <span><AiFillDollarCircle />{e.payment_method}</span>
                                    </div>
                                    </div>
                                    <div className="total">
                                        <IoMdCash size="25px" color="green"/>
                                        <h3>{e.items.map(e=>(e.unit_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})))}</h3>
                                    </div>
                                </div>
                                </div>
                                )
                                }) }
                            </div>

                    </Direita>
                </Conteudo>
            </Container>
            <Footer />
        </>
    );
}