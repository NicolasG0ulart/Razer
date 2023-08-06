import styled from "styled-components"

export const SectionMouse = styled.div`
    max-width: 1440px;
    height: 90vh;
    border: solid red;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    h1{
        font-size: 3.5rem;
        width: 460px;
        line-height: 60px;
        letter-spacing: 5px;
    }
    p{
        color: #585858;
        width: 460px;
    }
    button{
        border: 1px solid #181818;
        background-color: #00ff01;
        height: 45px;
        width: 150px;
        transition: 0.4s;

        color: #181818;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        &:hover{
            cursor: pointer;
            background-color: #0acc0b;
        }
    }
`
export const MouseMamba = styled.img`
    width: 600px;
`