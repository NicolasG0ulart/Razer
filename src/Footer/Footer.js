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
                    <li>Carreira</li>
                    <img src={LogoRazer} alt="Logo da Razer"/>
                    <li>Afiliados</li>
                    <li>Contate-nos</li>
                    <li>Newsletter</li>
                    <li>Social</li>
                </ul>
            </S.ContentFooter>

            <S.ContentFooterMobile>
                <img src={LogoRazer} alt="Logo da Razer"/>

                <S.Lista>
                    <ul>
                        <li>Sobre Razer</li>
                        <li>Imprensa</li>
                        <li>Carreira</li>
                        <li>Localizador de Lojas</li>
                    </ul>

                    <ul>
                        <li>Afiliados</li>
                        <li>Contate-nos</li>
                        <li>Newsletter</li>
                        <li>Social</li>
                    </ul>
                </S.Lista>
            </S.ContentFooterMobile>
        </S.Footer>
    )
}