import styled from 'styled-components';

export const Container = styled.div`
    width:90vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export const Compra = styled.div`
    width: 95%;  
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
`
export const PessoalInfo = styled.div`
    height: 100%;
    width: 60%;
    input{
        width: 300px;
    }
`
export const TituloSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    h1{
    border: solid 2px #820E0E;
    border-radius: 100%;
    width: 38px;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 15px;
    color: #820E0E;
    }
    h2{
    color: #820E0E;
    font-weight: bold;
    }
`

export const DadosEntrega = styled.div`
    height: 100%;
    width: 60%;
    margin-top: 5px;
    input{
        width: 300px;
    }
`
export const DadosCartao = styled.div`
    height: 100%;
    width: 60%;
    margin-top: 5px;
    input{
        width: 300px;
    }
`

export const Direita = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const PagBotao = styled.div`
    background: none;
    border: solid #820e0e 3px;
    color: #820E0E;
    padding: 10px 20px;
    margin: 15px;
    border-radius: 15px;
    cursor: pointer;
    :hover{
        background: #820e0e;
        color: white;
    }
`

export const Cartões = styled.div`
    display: flex;
`


export const Cartao = styled.div`
    background: #820E0E;
    height: 75%;
    width: 97%;
    border-radius: 25px;
`



export const CarrinhoDeCompras = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1{
        color: #820e0e;
    }
`

export const Produto = styled.div`
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    margin-top: 15px;
    color: #820e0e;
    background-color: white;
    display: grid;
    grid-template-columns:  10% 4fr 1fr;
    h1{
        font-size: 18px;
        margin-top: 7px;
        width: 100%;
        padding: 10px;
    }
    img{
        width: 65px;
        height: 65px;
        margin: 10px;
        resize: both;
    }
    h2{
        width: 25%;
        font-size: 15px;
    }
    span{
        padding: 10px;
    }
    
` 

export const InputsCartao = styled.div`
    width: 100%;
    input{
    padding: .3775rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s;
    }
`


export const InfoEndereco = styled.div`
    width: 50%;
    height: 100%;    
`
export const InfoCartao = styled.div`
    width: 100%;
    height: 100%;
`
export const Form = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    h3{
        z-index: 9;
        height: 100%;
        color: #C1C1C1;
    }
    input{
        width: 100%;
        height: 50px;
        background: #F0F0F0;
        border-radius: 9px;
        border: none;
        position: relative;
        padding-left: 10px;
        :focus{
            outline: none;
        }
    }
`
export const Baixo = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
`

export const Form2 = styled(Form)`
    width: 30%;
`
export const Form3 = styled(Form)`
    width: 70%;
`
export const Botao = styled.button`
    width: 93%;
    height: 50px;
    background: #fff;
    border-radius: 15px;
    color: #820E0E;
    cursor: pointer;
    border: none;
    border: 3px solid #820E0E;
    margin-left: 4%;
    :hover{
        background: #820E0E;
        color: #fff;
    }
`