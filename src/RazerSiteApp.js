import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

//images
import bgImage from "./assets/bg-image.PNG"

//components
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer"

export default function Razer(){

const GlobalStyle = createGlobalStyle`
  *{
   margin:0;
   padding:0;
   box-sizing:border-box;
 }
 h1, h2, h3, h4, h5, p, li{
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  color: #fff;
 }
`;

const FirstSection = styled.section`
  background-image: url(${bgImage});
  height: 100vh;
`

  return(
    <>
      <GlobalStyle/>
      <FirstSection>
        <Header/>
        <Main/>
        <Footer/>
      </FirstSection>
    </>
  )
}