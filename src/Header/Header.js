import React from "react";
import * as S from "./Styles"

//component
import MenuMobile from "./MenuMobile/Menu"

//images
import LogoRaze from "../assets/razer-logo.png"

export default function Header(){

    return(
        <S.Header>
            <img className="logo-razer" src={LogoRaze} alt="Logo da empresa Razer"/>

            <S.List>
                <li>Início</li>
                <li>Hardware</li>
                <li>Software</li>
                <li>Comunidade</li>
                <li>Loja</li>
                <li>Suporte</li>
            </S.List>
            
            <MenuMobile/>
        </S.Header>
    )
}