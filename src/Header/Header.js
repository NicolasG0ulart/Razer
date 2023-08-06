import React from "react";
import * as S from "./Styles"

//images
import LogoRaze from "../assets/razer-logo.png"

export default function Header(){

    return(
        <S.Header>
            <img className="logo-razer" src={LogoRaze} alt="Logo da empresa Razer"/>

            <ul>
                <li>Início</li>
                <li>Hardware</li>
                <li>Software</li>
                <li>Comunidade</li>
                <li>Loja</li>
                <li>Suporte</li>
            </ul>
        </S.Header>
    )
}