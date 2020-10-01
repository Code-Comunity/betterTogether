import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const Compra = styled.div`
    width: 85%;
    height: 60%;

    display: flex;
`
export const Esquerda = styled.div`
    height: 100%;
    width: 50%;
`
export const Direita = styled.div`
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Cartao = styled.div`
    background: #820E0E;
    height: 75%;
    width: 97%;
    border-radius: 25px;
`
export const InfoEndereco = styled.div`
    width: 50%;
    height: 100%;    
`
export const InfoCartao = styled.div`
    width: 50%;
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
