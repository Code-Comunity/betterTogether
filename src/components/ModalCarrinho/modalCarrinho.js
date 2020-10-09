/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import {Container, Conteudo, Card, Foto, Descricao, Preco, Icons, Close, LinkComprar, Quantidade} from './style';

//icons
import {IoMdCheckmarkCircle} from 'react-icons/io';
import {FaTrash} from 'react-icons/fa';
import {RiCloseCircleFill} from 'react-icons/ri';

import Context from '../../contexts/auth';

const Modal = ({ id = 'modal' ,onClose = () => {}}) => {

    const {qtdMais, qtdMenos} = useContext(Context);

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
        
        let item = JSON.parse(localStorage.getItem('@btgther/carrinho'));
        
        let item2 = item.map((e) => {
            
            let qtdItem = e.quantidade;
            //console.log(qtdItem)

            let precoItem = e.preco;
            //console.log(precoItem)
            
            let precoTotal = qtdItem * precoItem;
            e.preco = precoTotal;

            return precoTotal;
        })

        

        
        console.log(item)
        /*
        const coquecoisa = item.map((e) => {return e.preco = precoTotal});
        console.log(coquecoisa)
        */
        const valores = item.map((e)=>{return e.preco;});
        console.log(valores);

        const total = valores.reduce((total, currentElement) => total + currentElement)
        alert("valor total"+total);
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
                           
                            let preco = e.preco;
                            let qtdCarrinho = e.quantidade;
                            let totalCarrinho = qtdCarrinho * preco;

                            return( 
                            <Card key={e.id_produto}>
                                <Foto  ><img src={e.img} alt=""/></Foto>
                                <Descricao>
                                    <h1>{e.produto}</h1>
                                    <p>{e.descrisao}</p> 
                                </Descricao>
                                <Quantidade>
                                <div className="icon-produto" style={{width:"70%"}} >
                                    <h1 className="naoSelecionavel" unselectable="on" onClick={qtdMenos}>-</h1> 
                                    <input type="text" placeholder={e.quantidade} readOnly />
                                    <h1 className="naoSelecionavel" unselectable="on" onClick={qtdMais}>+</h1>
                                </div> 
                                </Quantidade>
                                <Preco>
                                    <Icons>
                                        <span onClick={()=>DeletarItem()} style={{cursor: "pointer"}}><FaTrash /></span>
                                    </Icons>
                                    <div>
                                        <h1>{totalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
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
