import React, {useEffect,useState} from 'react';
import api from '../../../service/api';

//components
import Navbar from '../../../components/menu/menu';

//style
import { Container, Compra, Esquerda, Direita, Cartao, Form, Baixo, Form2, Form3, InfoCartao, InfoEndereco, Botao } from './styles.js';

export default function Comprar(){

     //Variáveis de estado, resgatados do storage
     const [ user, setUser ] = useState([])
     const [ endereco, setEndereco ] = useState([])
     const [ items, setItems ] = useState([])
     
     //Variáveis de estado, para armazenar as values dos inputs.
     const [ numResid, setNumResid ] = useState('')
     const [ costumerNome,setCostumerNome ] = useState('')
     const [ nomeCartao,setNomeCartao ] = useState('')
     const [ numeroCartao, setNumeroCartao ] = useState('')
     const [ cvv, setCvv ] = useState('')
     const [ dataExpiracao, setDataExpiracao ] = useState('')
     const [ numeroTel, setNumeroTel ] = useState('')
     const [ cpf, setCpf ] = useState('')
     const [ referencia, setRef ] = useState('')
     const [ cep, setCep ] = useState('')
     const [ ruaNum,setRuaNum ] = useState('')
     const [ ruaNome,setRuaNome ] = useState('')
 
     //Resgatar informações do usuário salvos no storage
        useEffect(()=>{
         const usuario = JSON.parse(localStorage.getItem('@btgther/usuario'))
         const itemsCarrinho = JSON.parse(localStorage.getItem('@btgther/carrinho'))
 
             //Setar variaveis de estado
             setEndereco(usuario.endereco)
             setUser(usuario)
             setItems(itemsCarrinho)
             setCostumerNome(usuario.nome)
                //setCpf('858231847')
                //setNumeroTel('854299008')
     },[])
     //
     const adress = JSON.stringify(endereco)
     const adress1 = JSON.parse(adress)
     //
console.log(adress1)
     
    const billing = {
        name:costumerNome,
        adress:{
                country: 'br',
                state: endereco.estado,
                city: endereco.cidade,
                neighborhood: 'Rio Cotia',
                street: ruaNome,
                street_number: ruaNum,
                zipcode: 400000000
                }
     }
    
 
     const costumer = {
         external_id: "#3311",
         name: costumerNome,
         type: "individual",
         country: "br",
         email: user.email,
         documents: [
           {
             "type": "cpf",
             "number": cpf
           }
         ],
         phone_numbers: numeroTel,
         birthday: "2020-05-01"
       }
 
     const shipping = {
         name:costumerNome,
         fee: 1003,
         delivery_date:"2000-12-21",
         expedited:true,
         adress:billing.adress
     }
  
 
 
 async function RealizarCompra(){
     const valores = items.map((e)=>{return e.preco})
     const total = valores.reduce((total, currentElement) => total + currentElement)
         try{
        const response = await api.post('/transaction',{
             valorTotal:total,
             nomeCartao:nomeCartao,
             numeroCartao:numeroCartao,
             cvv:cvv,
             dataExpiracao:dataExpiracao,
             bil:billing,
             costumer:costumer,
             shipping:shipping,
             items:items,
             numResid: numResid,
             referencia:referencia
         })
         console.log(response)
         }catch(error){
             console.log(error)
         }
 }

    useEffect(()=>{
        //const enderecoDoCliente = JSON.parse(localStorage.getItem('@btgther/usuario'))
        //console.log(enderecoDoCliente.endereco); //Objeto endereço para usar no pagamento
        //const itemsCarrinho = JSON.parse(localStorage.getItem('@btgther/carrinho'))
        //console.log(itemsCarrinho[0]); //Objeto dos itens adicionados no carrinho para usar no pagamento
    },[])

    console.log(cep);

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
                            <Form>
                                <input type="text" placeholder="Número de residência" onChange={(e)=>setNumResid(e.target.value)} />
                            </Form>

                            <Form>
                                <input type="text" placeholder="CPF" onChange={(e)=>setCpf(e.target.value)} />
                            </Form>

                            <Form>
                                <input type="text" placeholder="Numero da rua" onChange={(e)=>setRuaNum(e.target.value)} />
                            </Form>

                            <Form>
                                <input type="text" placeholder="Nome da rua" onChange={(e)=>setRuaNome(e.target.value)} />
                            </Form>


                            <Form>
                                <input type="text" placeholder="CEP" onChange={(e)=>setCep(e.target.value)} />
                            </Form>

                            <Form>
                                <input type="text" placeholder="Telefone para contato" onChange={(e)=>setNumeroTel(e.target.value)} />
                            </Form>

                            <Form>
                                <input type="text" placeholder="Referência" onChange={(e)=>setRef(e.target.value)} />
                            </Form>

                        </InfoEndereco>
                        <InfoCartao>
                            <Form>
                                <input type="text" placeholder="Número do cartão" onChange={(e)=>setNumeroCartao(e.target.value)} />
                            </Form>

                            <Form>
                                <input type="password" placeholder="Nome escrito no cartão" onChange={(e)=>setNomeCartao(e.target.value)} />
                            </Form>
                            <Baixo>

                                <Form3>
                                    <input type="text" placeholder="Data expiração" onChange={(e)=>setDataExpiracao(e.target.value)} />
                                </Form3>

                                <Form2>
                                    <input type="text" placeholder="CVV" onChange={(e)=>setCvv(e.target.value)} />
                                </Form2>
                            </Baixo>
                            
                            <Botao onClick={()=>RealizarCompra()} ><h2>Finalizar</h2></Botao>

                        </InfoCartao>
                    </Direita>
                </Compra>
            </Container>
        </>
    );
}