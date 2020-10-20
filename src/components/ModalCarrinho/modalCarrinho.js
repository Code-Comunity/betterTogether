/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import {Container, Conteudo, Card, Foto, Descricao, Preco, Icons, Close, LinkComprar, Quantidade} from './style';

//icons
import {IoMdCheckmarkCircle} from 'react-icons/io';
import {FaTrash} from 'react-icons/fa';
import {RiCloseCircleFill} from 'react-icons/ri';

import Context from '../../contexts/auth';
import { useHistory } from 'react-router-dom';

const Modal = ({ id = 'modal' ,onClose = () => {}}) => {

    const history = useHistory()
    

    const { qtd, qtdMais, qtdMenos } = useContext(Context);

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

    /*
    //Parte relacionada a quantidade no carrinho
    //Contador que aumenta quantidade
    const [count, setCount] = useState(qtd)
    const [produto, setProduto] = useState([]);
    
    function qtdMaisCarrinho(){
        setCount(count + 1);
        produto[0].quantidade = count;
        const item = parseCarrinho
          item.push(produto[0])
        localStorage.setItem('@btgther/carrinho', JSON.stringify(item));

        produto.map(e =>{     
            if(count === e.estoque){
                setCount(e.estoque);
                alert("Esse é todo o nosso estoque :(")    
            }
            return setCount;
        })
    }
  
    //Contador que diminui quantidade
    function qtdMenosCarrinho(){
        setCount(count - 1);
        produto[0].quantidade = count;
        const item = parseCarrinho
          item.push(produto[0])
        localStorage.setItem('@btgther/carrinho', JSON.stringify(item));

        if(count === 1){
            setCount(1);
        } 
        
        console.log(produto[0].quantidade)
    }

    */

    function FinalizarCompra(){
        
        let item = JSON.parse(localStorage.getItem('@btgther/carrinho'));
        const valores = item.map((e)=>{return e.preco;});
        console.log(valores);

        const total = valores.reduce((total, currentElement) => total + currentElement)
        alert("valor total"+total);
        return history.push('/compra')
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
                                    <h3>Qtd: {e.quantidade} </h3>                   
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
