import styled from "styled-components"
import BgLogoRazer from "../../assets/icon-logo-razer.png"

export const SectionDeposition = styled.section`
    background-color: #161616;
    border-top: 1px solid #2e2e2e;
    width: 100%;
    padding-bottom: 60px;
    border: solid red;
`
export const DivTitle = styled.div`
    background-image: url(${BgLogoRazer});
    background-repeat: no-repeat;
    background-position: center;
    max-width: 400px;
    height: 200px;
    margin: 0 auto;
    margin-top: 80px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        color: #00ff01;
        font-weight: 600;
    }
    h1{
        font-size: 2.8rem;
        @media(max-width: 425px){
            font-size: 2rem;
        }
    }
`
export const DivServices = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 80px;

    flex-wrap: wrap;
    gap: 60px;

    div{
        width: 300px;
        height: 250px;
        border: solid #2e2e2e 1px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        img{
            width: 80px;
        }
        p{
            text-align: center;
        }
        @media(max-width: 400px){
            height: auto;
        }
    }
    @media(max-width: 1500px){
        padding-inline: 60px;
    }
`