import styled from "styled-components"

//Background
import BgImageHoverProduct from "../../assets/bg-image.PNG"

export const SectionHeadset = styled.section`
    background-color: #161616;
    box-shadow: inset 0 2px 5px black;
    padding-top: 80px;
    padding-bottom: 80px;
`
export const SectionTwo = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: space-around;
    @media(max-width: 1500px){
        padding-inline: 60px;
    }
`
export const ContentHeadset = styled.section`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
        gap: 60px;
    }
`
export const HeadsetKraken = styled.img`
    width: 330px;
    height: 380px;
    -webkit-filter: drop-shadow(10px 10px 10px #181818);
    filter: drop-shadow(10px 10px 10px #181818);
    @media(max-width: 1280px){
        width: 270px;
        height: 320px;
    }
`
export const Texts = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 50px;
    h1{
        font-size: 2.8rem;
        width: 460px;
        line-height: 50px;
        letter-spacing: 5px;
        @media(max-width: 1280px){
            width: 300px;
            font-size: 1.5rem;
            line-height: 40px;
            letter-spacing: 2px;
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
export const ContentProducts = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    @media(max-width: 1280px){
        justify-content: center;
    }
`
export const CardProduct = styled.div`
    border: solid #2e2e2e 1px;
    width: 300px;
    height: 365px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img{
        height: 150px;
        transition: 0.4s;
    }
    h4{
        margin-top: 30px;
        font-size: 1.3rem;
    }
    p{
        color: #00ff01;
    }
    &:hover{
        background-image: url(${BgImageHoverProduct});
        cursor: pointer;
        border: 0;

        img{
            margin-top: -15px;
            height: 165px;
        }
    }
`