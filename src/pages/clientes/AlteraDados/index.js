import React,{useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Context from '../../../contexts/auth';

//Styles
import { Header, Container, Conteudo, DireitaHeader, CentroHeader, Direita, Esquerda, Botao, Botao2, BotaoAlt } from './styles';

//Componentes
import Navbar from '../../../components/menu/menu';
import Footer from '../../../components/footer/footer';


//imagens e icons
import PerfilFoto from '../../../assets/perfilgrande.png';
import { GiSave } from 'react-icons/gi';

import { IoIosCube } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { AlterContainer } from './styles';
import api from '../../../service/api';




export default function Perfil(){

    const { usuario } = useContext(Context);
    const usuarioCep = JSON.parse(localStorage.getItem('@btgther/usuario'));
    console.log(usuario)

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
                        <Botao2>
                            <Link to="/perfil">
                                <IoIosCube />
                                <h3>Pedidos</h3>
                            </Link>
                        </Botao2>
                        <Botao>
                            <Link>
                                <FaUserCircle />
                                <h3>Alterar dados</h3>
                            </Link>
                        </Botao>
                    </Esquerda>
                    <Direita>
                        <h1>Cadastro:</h1>

                        <AlterContainer>
                            <h2>Nome:</h2>
                            <input type="text" name="nome" placeholder={usuario.nome} /*onChange={ e => setNome(e.target.value) }*//>
                            <BotaoAlt><span><GiSave /></span></BotaoAlt>
                        </AlterContainer>

                        <AlterContainer>
                            <h2>Email:</h2>
                            <input type="email" name="email" placeholder={usuario.email} /*onChange={ e => setEmail(e.target.value) }*//>
                            <BotaoAlt><span><GiSave /></span></BotaoAlt>
                        </AlterContainer>

                        <AlterContainer>
                            <h2>CEP</h2>
                            <input type="text" name="cep" placeholder={usuario.cep} /*onChange={ e => setCep(e.target.value) }*//>
                            <BotaoAlt><span><GiSave /></span></BotaoAlt>
                        </AlterContainer>

                        <h1>Alterar senha:</h1>

                        <AlterContainer>
                            <h2>Senha atual:</h2>
                            <input type="password" name="senha" /*onChange={ e => setSenha(e.target.value) }*//>
                        </AlterContainer>                        
                        <AlterContainer>
                            <h2>Nova senha:</h2>
                            <input type="password" name="senha"  /*onChange={ e => setSenha(e.target.value) }*//>
                        </AlterContainer>
                    </Direita>
                </Conteudo>
            </Container>
            <Footer />
        </>
    );
}