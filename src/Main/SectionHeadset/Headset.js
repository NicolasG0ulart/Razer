import React from "react";
import * as S from "./Styles";

//images
import HeadsetRazer from "../../assets/headset-second-section.png"

//component
import ButtonComponent from "../../components/button/button";

export default function HeadsetSection(){

    return(
        <S.SectionHeadset>
            <S.Content>
                <S.HeadsetKraken src={HeadsetRazer}/>
                <S.Texts>
                <h1>RAZER KRAKEN PRO</h1>
                <p>Os primeiros mouses de controle total automatizados do mundo desenvolvidos em 2016, especiais para jogos.</p>
                <ButtonComponent
                    textButton="VER MAIS"
                />
            </S.Texts>
            </S.Content>
        </S.SectionHeadset>
    )
}