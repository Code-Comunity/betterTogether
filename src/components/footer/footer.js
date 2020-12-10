
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cima, Baixo, Esquerda, Centro, Direita, EsquerdaBaixo, CentroBaixo, DireitaBaixo, Contato } from './style';

import LogoRed from '../../assets/logored.svg' ;
import Cartoes from '../../assets/cartoes.png';

import { AiOutlineArrowUp } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
    return(
        <>
            <Container>
                <Cima>
                    <Esquerda>
                        <h4>Atalhos:</h4>
                        <Link to="alterdados"><h3>Meu perfil</h3></Link>
                        <Link to="perfil"><h3>Meus pedidos</h3></Link>
                        <Link><h3>Promoções</h3></Link>
                    </Esquerda>
                    <Centro>
                        <h3>CNPJ:00.000.000/0000-00</h3>
                    </Centro>
                    <Direita>
                        <h4>Better Together:</h4>
                        <Link><h3>Sobre nós</h3></Link>
                        
                        <Contato>
                            <h3>Contato</h3>
                            <a href="https://www.instagram.com/bettertogetherssa/" target="_blank">
                                <IoLogoInstagram/>
                            </a>
                            <a href="https://wa.me/557198774901" target="_blank">
                                <FaWhatsapp/>
                            </a >
                        </Contato>
                        <a href="mailto:bettertogetherssa@outlook.com"><h3>bettertogetherssa@outlook.com</h3></a>
                    </Direita>
                </Cima>
                <Baixo>
                    <EsquerdaBaixo>
                        <img src={LogoRed} alt="Better Together"/>
                    </EsquerdaBaixo>
                    <CentroBaixo>
                        <h3>Divida de até 12x sem juros</h3>
                        <img src={Cartoes} alt="Cartoes"/>
                    </CentroBaixo>
                    <DireitaBaixo>
                        <Link >
                            <h4 onClick="$('html, body').animate({scrollTop:0}, 5000);">Voltar ao topo</h4>
                            <AiOutlineArrowUp />
                        </Link>
                    </DireitaBaixo>
                </Baixo>
            </Container>
        </>
    )
}