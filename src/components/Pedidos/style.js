import styled from 'styled-components';

export const ItemLista = styled.div`
    background: white;
    margin: 15px;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    flex-direction: column;   

    h2{
        background: #820E0E;
        border-radius: 9px;
        width: 35px;
        height: 35px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
`
export const Nome = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`
export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Infos = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`
export const InfoItens = styled.div`
    display: flex;
    flex-direction: column;
    color: gray;

    span{
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
    }

`
export const Total = styled.div`
    border-left: gray 1px solid;
    padding-left: 30px;
    display: flex;
    align-items: center;
    width: 120px;

    display: flex;
    flex-direction: column;
`