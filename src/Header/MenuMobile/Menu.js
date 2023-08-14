import React from "react";
import { slide as Menu } from 'react-burger-menu'
import './Styles.css'

export default function Header(){

    return(
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                <li>Início</li>
                <li>Hardware</li>
                <li>Software</li>
                <li>Comunidade</li>
                <li>Loja</li>
                <li>Suporte</li>
        </Menu>
    )
}