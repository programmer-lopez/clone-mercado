import styled from "styled-components";

export const  Container = styled.div`
display: flex:;
flex-direction: column;
margin-top: 12px;
border: 1px solid red;
`
export const  Panel = styled.div` 
background-color: var(--white);
box-shadow: var(--panel);
display: grid;
grid-template-column: 67fr 33fr;
`
export const  Column = styled.div` 

`
export const  Galeria = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 530px;

>img{
    height: 75%;
}
`
