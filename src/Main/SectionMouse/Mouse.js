import React from "react";
import * as S from "./Styles"

//components
import ButtonComponent from "../../components/button/button";


//images
import MouseRazer from "../../assets/mouse-first-section.png"

export default function MouseSection(){

    return(
        <S.SectionMouse>
            <S.Texts>
                <h1>RAZER MAMBA PRO</h1>
                <p>Os primeiros mouses de controle total automatizados do mundo desenvolvidos em 2016, especiais para jogos.</p>
                {/* <button>VER MAIS</button> */}
                <ButtonComponent
                    textButton="VER MAIS"
                />
            </S.Texts>
            <S.MouseMamba src={MouseRazer} alt="Imagem do mouse mamba pro da Razer"/>
        </S.SectionMouse>
    )
}