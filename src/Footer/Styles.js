import styled from "styled-components"
import bgImageFooter from "../assets/bg-image.PNG"

export const Footer = styled.footer`
    background-image: url(${bgImageFooter});
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    
`
export const ContentFooter = styled.section`
    height: 100%;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
        display: flex;
        gap: 50px;
        list-style: none;

        img{
            width: 110px; 
            height: 20px;
            &:hover{
                cursor: pointer;
            }
        }
    }
    ul li{
        color: #585858;
        &:hover{
            color: #00ff01;
            cursor: pointer;

        }
    }
    @media(max-width: 1024px){
        display: none;
    }
`
export const ContentFooterMobile = styled.section`
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
    width: 60%;
    
    ul{
        list-style: none;

        li{
            padding-top: 30px;
            color: #585858;
            text-align: center;
        }
    }
    img{
        width: 110px; 
        height: 20px;
    }
    @media(max-width: 1024px){
        display: flex;
    }
    @media(max-width: 600px){
        width: 80%;
    }
`
export const Lista = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 400px){
        flex-direction: column;
    }
`