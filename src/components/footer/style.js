import styled from 'styled-components';

export const Container = styled.footer`
    width: 100vw;
    max-height: 293px;
    margin-top: 40px;
    font-family: sans-serif;

    display: flex;
    flex-direction: column;
`

export const Cima = styled.div`
    width: 100%;
    height: 70%;
    background: #820E0E;

    display: flex;
    flex-direction: row;
`
export const Baixo = styled.div`
    width: 100%;
    height: 30%;
    background: #f4f4f4;

    display: flex;
    flex-direction: row;
`
export const Esquerda = styled.div`
    width: 20%;
    height: 100%;
    color: #fff;
    font-size: 20px;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    h4{
        padding-left: 20px;
        margin-bottom: 5px;
        margin-top: 20px;
    }
    a{
        color: #fff;
        font-size: 12px;
        margin: 2px;
        margin-left: 20px;
        margin-bottom: 5px;
    }

`
export const Centro = styled.div`
    width: 60%;
    min-height: 100%;
    padding-bottom: 25px;
    color: #fff;
    font-size: 12px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
export const Direita = styled.div`
    width: 20%;
    height: 100%;
    color: #fff;
    font-size: 20px;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    h4{
        padding-left: 40px;
        margin-bottom: 5px;
        margin-top: 20px;
    }
    a{
        color: #fff;
        font-size: 12px;
        margin: 2px;
        margin-left: 40px;
        margin-bottom: 5px;
    }
`
export const EsquerdaBaixo = styled.div`
    width: 20%;
    height: 100%;
    color: #fff;
    font-size: 20px;

        img{
        width: 70px;
        margin: 10px;
        margin-left: 10px;
    }
`
export const CentroBaixo = styled.div`
    width: 60%;
    min-height: 100%;

    color: #484646;
    font-size: 12px;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
`
export const DireitaBaixo = styled.div`
    width: 10%;
    min-height: 100%;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    a{
        color: #484646;
        font-size: 16px;

        display: flex;
        flex-direction: row;

    }
    
`
export const Contato = styled.div`
    margin-left: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    h3{
        font-size: 12px;
    }
    a{
        font-size: 25px;
        margin-left: 3px;

    }
`

