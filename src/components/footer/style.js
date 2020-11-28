import styled from 'styled-components';

export const Container = styled.footer`
    min-width: 100vw;
    max-height: 293px;
    margin-top: 40px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;
    @media(max-width: 425px){
        margin-top: 50px;
    }
   
`

export const Cima = styled.div`
    width: 100%;
    height: 70%;
    background: #820E0E;
    display: flex;
    flex-direction: row;
    @media(max-width: 425px){
        flex-direction: column-reverse;
    }
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
    font-size: 2.0rem;
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
        font-size: 1.2rem;
        margin: 2px;
        margin-left: 20px;
        margin-bottom: 5px;
    }
    @media (max-width: 425px){
        display: none;
    }
`
export const Centro = styled.div`
    width: 60%;
    min-height: 100%;
    padding-bottom: 25px;
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    @media(max-width: 768px){
        width: 50%;
    }
    @media (max-width: 540px){
        width: 40%;
    }
    @media(max-width: 425px){
        width: 100%;
        align-items: center;
    }
`
export const Direita = styled.div`
    width: 20%;
    height: 100%;
    color: #fff;
    font-size: 2.0rem;
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
    @media(max-width: 425px){
        width: 100%;
    }
`
export const EsquerdaBaixo = styled.div`
    width: 20%;
    height: 100%;
    color: #fff;
    font-size: 2.0rem;
        img{
        width: 70px;
        margin: 10px;
        margin-left: 10px;
        
        @media(max-width: 425px){
            width: 80%;
        }
    }
`
export const CentroBaixo = styled.div`
    width: 60%;
    min-height: 100%;
    color: #484646;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    img{
        @media(max-width: 540px){
            width: 100%;
        }
    }
    @media(max-width: 280px){
        font-size: 10px;
    }
`
export const DireitaBaixo = styled.div`
    width: 20%;
    min-height: 100%;
    font-size: 2.0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a{
        color: #484646;
        font-size: 16px;
        display: flex;
        flex-direction: row;
    }
    @media(max-width: 768px){
        display: none;
    }
    
`
export const Contato = styled.div`
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    h3{
        font-size: 1.2rem;
    }
    a{
        font-size: 2.5rem;
        margin-left: 3px;
    }
`
