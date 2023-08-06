import styled from "styled-components"

export const SectionHeadset = styled.section`
    border: solid hotpink;
    background-color: #0f0f0f;


`
export const Content = styled.section`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`
export const HeadsetKraken = styled.img`
    width: 480px;
    height: 520px;
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
`