import styled from "styled-components"
import BgImageInsider from "../../assets/bg-image-insider.png"

export const SectionInsider = styled.section`
    background-image: url(${BgImageInsider});
    box-shadow: inset 0 20px 20px black;
    background-color: #fff;
    height: 40vh;
    display: flex;
    align-items: center;
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
    }
`
export const SecoundSectionInsider = styled.section`
    background-color: #161616; 
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
export const ContentInsider = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
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
    }
`
