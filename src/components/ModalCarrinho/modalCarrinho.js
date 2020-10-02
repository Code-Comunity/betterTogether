/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {Container, Conteudo, Card, Foto, Descricao, Preco, Icons, Close, LinkComprar} from './style';

//icons
import {IoMdCheckmarkCircle} from 'react-icons/io';
import {FaTrash} from 'react-icons/fa';
import {RiCloseCircleFill} from 'react-icons/ri';

const Modal = ({ id = 'modal' ,onClose = () => {}}) => {

    

    //GETTER
    const carrinho = localStorage.getItem('@btgther/carrinho');
    const parseCarrinho = JSON.parse(carrinho);
    
    const [statusCarrinho, setStatusCarrinho] = useState(parseCarrinho)


    const clickFora = (e) => {
        if(e.target.id === id) onClose();
    };

    function DeletarItem(){
        parseCarrinho.pop()
        localStorage.setItem('@btgther/carrinho', JSON.stringify(parseCarrinho));
        return setStatusCarrinho(parseCarrinho);
    }

    function FinalizarCompra(){
        const valores = statusCarrinho.map((e)=>{return e.preco;})
        const total = valores.reduce((total, currentElement) => total + currentElement)
        alert("valor total"+total)
        return total;
        
        /* PARA ENVIAR PARA O BACKEND
        api.post('/transaction', {total})
        */
    }

    useEffect(()=>{
        function atualizador(){
            const newParse = JSON.parse(localStorage.getItem('@btgther/carrinho'))
            return setStatusCarrinho(newParse);
        }
        atualizador();  
    },[])

    useEffect(()=>{
        if(statusCarrinho == null){
            console.log("carrinho ta vazio")
        }
    },[])

    return ( 
            
            <Container id={id} onClick={clickFora}>
                    <Conteudo >
                        <Close> <span><RiCloseCircleFill onClick={onClose} /></span></Close>
                    
                        { statusCarrinho===null ? <h1>Carrinho vazio, Adicione itens</h1> : statusCarrinho.map(e => {
                            let preco = e.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                            return( 
                            <Card key={e.id_produto}>
                                <Foto  ><img src={e.img} alt=""/></Foto>
                                <Descricao>
                                    <h1>{e.produto}</h1>
                                    <p>{e.descrisao}</p> 
                                </Descricao>
                                <Preco>
                                    <Icons>
                                        <span onClick={()=>DeletarItem()} style={{cursor: "pointer"}}><FaTrash /></span>
                                    </Icons>
                                    <div>
                                        <h1>{preco}</h1>
                                    </div>
                                </Preco>
                            </Card>
                            ) 
                        })  
                    }   
                        <LinkComprar>
                            <span onClick={()=>FinalizarCompra()}>                               
                                Finalizar compra 
                                <IoMdCheckmarkCircle />
                            </span>
                        </LinkComprar> 
                    </Conteudo>
                
            </Container>    
       
    )
};

export default Modal;
