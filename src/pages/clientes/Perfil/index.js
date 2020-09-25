import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Header, Container, Conteudo, DireitaHeader, CentroHeader, Direita, Esquerda, Botao, Botao2 } from './styles';

//Componentes
import Navbar from '../../../components/menu/menu';
import Footer from '../../../components/footer/footer';
import Pedidos from '../../../components/Pedidos/index';


//imagens e icons
import PerfilFoto from '../../../assets/perfilgrande.png';

import { IoIosCube, IoIosCall } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

export default function Perfil(){
    return(
        <>
            <Navbar />
            <Container>
                <Header>
                    <DireitaHeader>
                        <div>
                            <h1>Maria Silva</h1>
                            <h3>mariasilva@gmail.com</h3>
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
                            <Link>
                                <FaUserCircle />
                                <h3>Cadastro</h3>
                            </Link>
                        </Botao2>
                        <Botao2>
                            <Link>
                                <ImLocation2/>
                                <h3>Endereço</h3>
                            </Link>
                        </Botao2>
                        <Botao2>
                            <Link>
                                <IoIosCall />
                                <h3>Fale conosco</h3>
                            </Link>
                        </Botao2>
                        
                    </Esquerda>
                    <Direita>
                        <h1>Pedidos:</h1>
                        <Pedidos />
                    </Direita>
                </Conteudo>
            </Container>
            <Footer />
        </>
    );
}