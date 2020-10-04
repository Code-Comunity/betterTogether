import React, {useEffect,useState} from 'react';
import api from '../../../service/api';
//import Cleave from 'cleave.js/react';

import axios from 'axios';

//components
import Navbar from '../../../components/menu/menu';

//style
import { Container, Compra, Esquerda, Direita, Cartao, Form, Baixo, Form2, Form3, InfoCartao, InfoEndereco, Botao } from './styles.js';

export default function Comprar(){
  //Variáveis de estado, resgatados do storage
  const [user, setUser] = useState([]);
  const [endereco, setEndereco] = useState([]);
  const [items, setItems] = useState([]);

  //Variáveis de estado, para armazenar as values dos inputs.
  const [numResid, setNumResid] = useState("");
  const [costumerNome, setCostumerNome] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvv, setCvv] = useState("");
  const [dataExpiracao, setDataExpiracao] = useState("");
  const [numeroTel, setNumeroTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [referencia, setRef] = useState("");
  const [cep, setCep] = useState("");
  const [ruaNum, setRuaNum] = useState(0);

    //Var de estado para Receber Resposta

    const [ pagamento, setPagamento ] = useState([]);

  //Criando Costumer
  const costumer = {
    external_id: "#3311",
    name: costumerNome,
    type: "individual",
    country: "br",
    email: user.email,
    documents: [
      {
        type: "cpf",
        number: cpf,
      },
    ],
    phone_numbers: [`+55${numeroTel}`, "+5511888889999"],
    birthday: "1965-01-01",
  };

  //Criando adress para usar em billing e shipping
  const adress = {
    country: "br",
    state: endereco.uf,
    city: endereco.localidade,
    neighborhood: endereco.bairro,
    street: endereco.logradouro,
    street_number: ruaNum,
    zipcode: cep,
  };

  //Criando o shipping
  const shipping = {
    name: "Shipping Reeves",
    fee: 1000,
    delivery_date: "2000-12-21",
    expedited: true,
    address: adress,
  };

  //Criando o billing
  const billing = {
    name: "Billing Moss",
    address: adress,
  };

  //Criando um array com os itens no template do pagarme
  const meusItems = items.map((e) => {
    let preco = e.preco;
    let precoSemPonto = preco + "";
    precoSemPonto = precoSemPonto.replace(".", "");
    precoSemPonto = parseInt(precoSemPonto);



    return {
      id: `rb${e.id_produto}`,
      title: e.produto,
      unit_price: precoSemPonto,
      quantity: 1,
      tangible: true,
    };
  });

  //Resgatar informações do usuário salvos no storage
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("@btgther/usuario"));
    const itemsCarrinho = JSON.parse(localStorage.getItem("@btgther/carrinho"));

    //Setar variaveis de estado
    setEndereco(usuario.endereco);
    setUser(usuario);
    setItems(itemsCarrinho);
    setCostumerNome(usuario.nome);
  }, []);
  //Pegando endereço dos correios (POR ENQUANTO PEGAREMOS O CADASTRADO NO STORAGE)
  useEffect(() => {
    const enderecoDoCliente = JSON.parse(
      localStorage.getItem("@btgther/usuario")
    );
    const enderecoSemTraço = enderecoDoCliente.endereco.cep.replace(
      /[^\d]+/g,
      ""
    );
    async function BuscarCep() {
      const CorreiosCep = await axios
        .get(`https://viacep.com.br/ws/${enderecoSemTraço}/json/`)
        .then((e) => {
          return e.data;
        });
      return setEndereco(CorreiosCep);
    }
    BuscarCep();
  }, []);

  useEffect(()=>{
    if(!pagamento){
        return alert("tá pago!");
    }else{
        return;
    }

  },[pagamento])


  async function RealizarCompra() {
    const valores = items.map((e) => {
      return e.preco;
    });
    const total = valores.reduce(
      (total, currentElement) => total + currentElement
    );

    let totalSemPonto = total + "";
    totalSemPonto = totalSemPonto.replace(".", "");
    totalSemPonto = parseInt(totalSemPonto);

    try {
      const response = await api.post("/transaction", {
        amount: totalSemPonto,
        card_number: numeroCartao,
        card_cvv: cvv,
        card_expiration_date: dataExpiracao,
        card_holder_name: nomeCartao,
        customer: costumer,
        billing: billing,
        shipping: shipping,
        items: meusItems,
        referencia:referencia,
        numeroDaResidencia: numResid,
      });
      alert(response.status)
      return setPagamento(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  return (
    <>
      <Navbar />
      <Container>
        <Compra>
          <Esquerda>
            <Cartao>
              {/* Cleave é uma tentativa de mostrar a bandeira do cartão */}
              {
                //<Cleave placeholder="Enter your credit card number"
                //  options={{creditCard: true}}
                //onChange={(e)=>setOnchange(e.target.value)} />
              }
            </Cartao>
          </Esquerda>
          <Direita>
            <InfoEndereco>
              <Form>
                <input
                  type="text"
                  placeholder="Número de residência"
                  onChange={(e) => setNumResid(e.target.value)}
                />
              </Form>

              <Form>
                <input
                  type="text"
                  placeholder="CPF"
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Form>

              <Form>
                <input
                  type="text"
                  placeholder="Numero da rua"
                  onChange={(e) => setRuaNum(e.target.value)}
                />
              </Form>

              <Form>
                <input
                  type="text"
                  placeholder="CEP"
                  onChange={(e) => setCep(e.target.value)}
                />
              </Form>

              <Form>
                <input
                  type="text"
                  placeholder="Telefone para contato"
                  onChange={(e) => setNumeroTel(e.target.value)}
                />
              </Form>

              <Form>
                <input
                  type="text"
                  placeholder="Referência"
                  onChange={(e) => setRef(e.target.value)}
                />
              </Form>
            </InfoEndereco>
            <InfoCartao>
              <Form>
                <input
                  type="text"
                  placeholder="Número do cartão"
                  onChange={(e) => setNumeroCartao(e.target.value)}
                />
              </Form>

              <Form>
                <input
                  type="password"
                  placeholder="Nome escrito no cartão"
                  onChange={(e) => setNomeCartao(e.target.value)}
                />
              </Form>
              <Baixo>
                <Form3>
                  <input
                    type="text"
                    placeholder="Data expiração"
                    onChange={(e) => setDataExpiracao(e.target.value)}
                  />
                </Form3>

                <Form2>
                  <input
                    type="text"
                    placeholder="CVV"
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </Form2>
              </Baixo>

              <Botao onClick={() => RealizarCompra()}>
                <h2>Finalizar</h2>
              </Botao>
            </InfoCartao>
          </Direita>
        </Compra>
      </Container>
    </>
  );
}