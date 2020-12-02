import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    width: 100vw;
    height: 25%;
    margin-top: 80px;
    background: #820E0E;
    display: flex;
    flex-direction: row-reverse;
`
export const Conteudo = styled.div`
    width: 100vw;
    height: auto;
    margin-top: 25px;
    padding-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media(max-width: 425px){
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
`
export const DireitaHeader = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1%;
    
    h1{
        font-size: 2.2rem;
        color: #fff;
    }
    h3{
        color: #fff;
    }
    @media(max-width: 425px){
        h1{
            display: none;
        }
        h3{
            display: none;
        }
    }
`
export const CentroHeader = styled.div`
    width: 11%;
    display: flex;
    justify-content: center;
    align-items: center;
img{
    resize: both;
    height: 95%;
    border: solid white 4px;
    border-radius: 100%;
}
`
export const Esquerda = styled.div`
    width: 13%;
   
    display: flex;
    flex-direction: column;
    @media(max-width: 425px){
        flex-direction: row;
        justify-content: center;
        width: 100%;
        text-align: center;
        
 
        h3{
            font-size: 18px;
        }
    }
`
export const Direita = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column; 
    
    h1{
        color: #820E0E;
        font-size: 2.7rem;
        margin-left: 20px;
    }
    @media(max-width: 425px){
        width: 100vw;
        h1{
            display: none;
        }
    }
`
export const Botao = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    a{
        color: #820E0E;
        font-size: 2.1rem;
        display: flex;
        flex-direction: row;
    }
    h3{
        margin-left: 5px;
    }
    @media(max-width: 425px){
        margin: 0;
        width: 100%;
        justify-content: center; 
        a{
            align-items: center;
        }
        h3{
            margin: 0;
        }
    }
    
`
export const Botao2 = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    a{
        color: #A6A6A6;
        font-size: 2.1rem;
        display: flex;
        flex-direction: row;
    }
    h3{
        margin-left: 5px;
    }
    @media(max-width: 425px){
        a{
            justify-content: center;
            align-items: center;
        }
        h3{
            margin: 0;
        }
    }
`
export const Card= styled.div`
    width: 90%;
    min-height: 150px;
    background: #fff;
    margin: 10px;
`