import styled from "styled-components"
import BgImageInsider from "../../assets/bg-image-insider.png"
import BgImageInsiderMobile from "../../assets/bg-image-insider-mobile.png"

export const SectionInsider = styled.section`
    background-image: url(${BgImageInsider});
    box-shadow: inset 0 20px 20px black;
    background-color: #fff;
    height: 40vh;
    display: flex;
    align-items: center;
    @media(max-width: 425px){
        background-image: url(${BgImageInsiderMobile});
    }
`
export const FirstSectionInsider = styled.section`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1{
        font-size: 2.8rem;
        width: 200px;
        line-height: 50px;
        letter-spacing: 5px;
    }
    p{
        color: #00ff01;
        width: 460px;
        font-weight: 600;
        @media(max-width: 1280px){
            width: 100%;
        }
    }
    @media(max-width: 1500px){
        padding-inline: 60px;
    }
`
export const SecoundSectionInsider = styled.section`
    background-color: #161616; 
    padding-top: 120px;
    padding-bottom: 120px;
    display: flex;
    gap: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media(max-width: 870px){
        padding-top: 70px;
        padding-bottom: 70px;
    }

`
export const ContentInsider = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    @media(max-width: 870px){
        justify-content: center;
        gap: 60px;
    }
    div{
        width: 350px;
        h5{
            font-size: 1rem;
            font-weight: 600;
        }
        p{
            margin-top: 15px;
            font-size: 1rem;
            color: #585858;
            font-weight: 400;
        }
        @media(max-width: 1366px){
            width: 250px;
        }
    }
    @media(max-width: 1500px){
        padding-inline: 60px;
    }
`
