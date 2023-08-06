import styled from "styled-components"

export const Header = styled.header`
    height: 10vh;
    border: solid blue;
    max-width: 1440px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-razer{
        width: 200px; 
        &:hover{
            cursor: pointer;
        }
    }

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }
    ul li{
        color: #585858;
        position: relative;

        &:after{
            content: "";
            position: absolute;
            left: 0;
            top: 30px;
            width: 0%;
            height: 3px;
            background-color: #00ff01;
            transition: 0.4s;
        }
        &:hover:after{
            width: 100%;
        }

        &:hover{
            color: #00ff01;
            cursor: pointer;

        }
    }
`