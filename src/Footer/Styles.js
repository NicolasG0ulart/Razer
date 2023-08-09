import styled from "styled-components"
import bgImageFooter from "../assets/bg-image.PNG"

export const Footer = styled.footer`
    background-image: url(${bgImageFooter});
    height: 150px;
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
`