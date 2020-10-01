import React, {useEffect} from 'react';

//components
import Navbar from '../../../components/menu/menu';

//style
import { Container, Compra, Esquerda, Direita, Cartao, Form, Baixo, Form2, Form3, InfoCartao, InfoEndereco } from './styles.js';

export default function Comprar(){

    useEffect(()=>{
        //const enderecoDoCliente = JSON.parse(localStorage.getItem('@btgther/usuario'))
        //console.log(enderecoDoCliente.endereco); //Objeto endereço para usar no pagamento
        //const itemsCarrinho = JSON.parse(localStorage.getItem('@btgther/carrinho'))
        //console.log(itemsCarrinho[0]); //Objeto dos itens adicionados no carrinho para usar no pagamento
    },[])

    return(
        <>
            <Navbar />
            <Container>
                <Compra>
                    <Esquerda>
                        <Cartao></Cartao>
                    </Esquerda>
                    <Direita>
                        <InfoEndereco>

                        </InfoEndereco>
                        <InfoCartao>
                            <Form>
                                <input type="text" name="email" placeholder="Número do cartão"  />
                            </Form>

                            <Form>
                                <input type="password" name="senha" placeholder="Nome escrito no cartão" />
                            </Form>
                            <Baixo>

                                <Form3>
                                    <input type="text" name="email" placeholder="Data expiração"  />
                                </Form3>

                                <Form2>
                                    <input type="text" name="senha" placeholder="CVV" />
                                </Form2>

                            </Baixo>
                        </InfoCartao>
                    </Direita>
                </Compra>
            </Container>
        </>
    );
}