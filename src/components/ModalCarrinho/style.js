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
    max-height: 85%;
    overflow: auto;
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
    @media (max-width: 425px){ 
        width: 80%;
    }
    
`
export const Card = styled.div`
    width: 100%;
    margin: 2px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
export const Foto = styled.div`
    width: 202px;
    height: 160px;

    img{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1024px){    
        width: 140px;
        height: 112px;
    }
    @media (max-width: 425px){ 
        width: 100px;
        height: 79px;
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
        font-size: 2.0rem;
        color: #820E0E;
        text-align: left;
    }
    @media (max-width: 768px){ 
        h1{   
            font-size: 1.5rem;
        }  
        p{
            font-size:1.2rem;
        }
    }
    @media (max-width: 425px){ 
        h1{   
            font-size: 1.2rem;
        }  
        p{
            font-size:1.0rem;
        }
    }
    @media (max-width: 320px){ 
        h1{   
            font-size: 1.0rem;
        }  
        p{
            font-size:0.8rem;
        }
    }
`
export const Quantidade = styled.div`
    width: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
    margin-bottom: 25px;

    input{
        width: 80%;
        height: 40px;
        background: #F0F0F0;
        border-radius: 9px;
        border: none;
        position: relative;

        
        padding-left: 30%;
        font-size: large;
        font-weight: 700;
    }

    h1{
        color: #820E0E;
        margin: 10px;
        cursor: pointer;
    }
`

export const Preco = styled.div`
    width: 20%;

    display:flex;
    flex-direction: column;
`
export const MostraPreco = styled.div`

    h1{
        font-size: 3.0rem;
        color: #820E0E;
        text-align: left;
        margin-top: 10px;   
    }

    @media (max-width: 1024px){ 
        h1{   
            font-size: 2.5rem;
        }  
    }
    @media (max-width: 768px){ 
        h1{   
            font-size: 2.0rem;
        }  
    }
    @media (max-width: 425px){ 
        h1{   
            font-size: 1.2rem;
        }  
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
export const LinkComprar = styled.div`
    display:flex;
    justify-content:center;

    span{
        color: #820E0E; 
        size: 20px; 
        cursor: pointer;

        img{
            margin-left: 2px;
        }
    }
`