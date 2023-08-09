import React from "react";
import * as S from "./Styles"

//images
import LogoRazer from "../assets/razer-logo.png"

export default function Footer(){

    return(
        <S.Footer>
            <S.ContentFooter>
                <ul>
                    <li>Sobre Razer</li>
                    <li>Imprensa</li>
                    <li>Localizador de Lojas</li>
                    <img src={LogoRazer} alt="Logo da Razer"/>
                    <li>Afiliados</li>
                    <li>Contate-nos</li>
                    <li>Newsletter</li>
                    <li>Social</li>
                </ul>
            </S.ContentFooter>
        </S.Footer>
    )
}