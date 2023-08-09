import React from "react";
import * as S from "./Styles"

//images
import DepositionsLogo from "../../assets/depositions.png"


export default function Depositions(){

    return(
        <S.SectionDeposition>
            <S.DivTitle>
                <p>CLIENTES DA RAZER</p>
                <h1>DEPOIMENTOS</h1>
            </S.DivTitle>

            <S.DivServices>
                <div>
                    <img src={DepositionsLogo} alt="Ícone de depoimentos"/>
                    <p>O Razer Mamba elevou meu jogo para outro nível. Cliques precisos e conforto incrível. Top demais!</p>
                </div>

                <div>
                    <img src={DepositionsLogo} alt="Ícone de depoimentos"/>
                    <p>Teclado Razer Lycosa Expert é simplesmente sensacional! Resposta rápida e visual incrível. Recomendo muito!</p>
                </div>

                <div>
                    <img src={DepositionsLogo} alt="Ícone de depoimentos"/>
                    <p>Razer Kraken me envolveu no jogo. Som incrível, conforto total. Perfeito para horas de diversão.</p>
                </div>

                <div>
                    <img src={DepositionsLogo} alt="Ícone de depoimentos"/>
                    <p>"Meu Razer Blade 15 é imbatível. Desempenho poderoso e portátil. Jogo e trabalho em grande estilo.</p>
                </div>
            </S.DivServices>
        </S.SectionDeposition>
    )
}