import styled from "styled-components"

//Background
import BgImageHoverProduct from "../../assets/bg-image.PNG"

export const SectionHeadset = styled.section`
    background-color: #161616;
    box-shadow: inset 0 2px 5px black;
    height: 100vh;
`
export const SectionTwo = styled.section`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const ContentHeadset = styled.section`    
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeadsetKraken = styled.img`
    width: 330px;
    height: 380px;
    -webkit-filter: drop-shadow(10px 10px 10px #181818);
    filter: drop-shadow(10px 10px 10px #181818);
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
    }
    p{
        color: #585858;
        width: 460px;
    }
`
export const ContentProducts = styled.section`
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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