import styled from "styled-components"

export const SectionMouse = styled.div`
    max-width: 1440px;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1500px){
        padding-inline: 60px;
    }
    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
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
        @media(max-width: 1280px){
            width: 300px;
            font-size: 2rem;
            line-height: 40px;
            letter-spacing: 3px;
        }
    }
    p{
        color: #585858;
        width: 460px;
        @media(max-width: 1280px){
            width: 300px;
        }
    }
    @media(max-width: 1280px){
        gap: 25px;
    }
    @media(max-width: 1024px){
        margin-top: 60px;
    }
`
export const MouseMamba = styled.img`
    width: 600px;
    @media(max-width: 1280px){
        width: 350px;
    }
    @media(max-width: 350px){
        width: 310px;
    }
    
`