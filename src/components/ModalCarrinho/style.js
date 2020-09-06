import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 10;
    position: fixed;
    background: rgba(0,0,0,0.3);

    display: flex;
    justify-content: center;

`
export const Conteudo = styled.div`
    z-index: 10;
    position: fixed;
    width: 70%;
    background: #F4F5F9;
    margin-top: 70px; 
    padding: 10px;
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);

    /*border-radius: 9px;*/

    display: flex;
    flex-direction: column;

    span{
        color: #820E0E; 
        margin-right: 5px; 
    }
`
export const Card = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
export const Foto = styled.div`
    width: 20%;

    img{
        width: 100%;
        height: 160px;
    }
`
export const Descricao = styled.div`
    width: 70%;
    padding: 10px;

    p{
        color: #A6A6A6;
        text-align: left;
        margin-top: 5px;
    }
    h1{
        font-size: 20px;
        color: #820E0E;
        text-align: left;
    }
`
export const Preco = styled.div`
    width: 20%;

    display:flex;
    flex-direction: column;

    h1{
        font-size: 30px;
        color: #820E0E;
        text-align: left;
        margin-top: 10px;
    }

`
export const Icons = styled.div`
    padding: 10px;

    display: flex;
    flex-direction: row-reverse;

    span{
        color: #820E0E;   
    }
`
export const Close = styled.div`
    
    display: flex;
    flex-direction: row-reverse;

    span{
        color: #820E0E; 
        size: 20px; 
        cursor: pointer; 
    } 
`