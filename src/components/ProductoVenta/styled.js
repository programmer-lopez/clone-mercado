import styled from "styled-components";
import {
    HiOutlineHeart,
    HiOutlineCheck,
    HiOutlineShieldCheck
} from "react-icons/hi";

export const Container = styled.div`
display:flex;
flex-direction: column;
padding: 32px 16px;
margin: 16px;
border: 1px solid var(--border);
border-radius: 5px;
`
export const Estado = styled.div`
    font-size: 14px;
    margin-top: 10px;
    color: var(--text2);
    `
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    >h1{
        width: 100%;
        font-size: 22px;
        line-height:25.9px;
        color: var(--text1);
        font-weight: 500;
    }
    `
export const HeartIcon = styled(HiOutlineHeart)`
    width: 28px;
    height: 28px;
    color:var(--blue1);
    cursor: pointer;
    margin-left: 16px;
    `
export const Card = styled.div`
    
    `
export const CheckIcon = styled.div`
    
    `
export const Price = styled.div`
    
    `
export const Cantidad = styled.div`
    
    `
export const Color = styled.div`
    
    `
export const ButtonCard = styled.div`
    
    `
export const Button = styled.div`
    
    `
export const Beneficios = styled.div`
    
    `
export const ShildeIcon = styled.div`
    
    `