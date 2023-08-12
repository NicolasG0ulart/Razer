import React from "react";
import * as S from "./Styles";

//images
import HeadsetRazer from "../../assets/headset-second-section.png"
import Keyboard from "../../assets/teclado.png"
import HeadsetProduct from "../../assets/headset.png"
import Mouse from "../../assets/mouse.png"
import Pad from "../../assets/pad.png"

//component
import ButtonComponent from "../../components/button/button";

export default function HeadsetSection(){

    return(
        <S.SectionHeadset>
            <S.SectionTwo>
                <S.ContentHeadset>
                    <S.HeadsetKraken src={HeadsetRazer}/>
                    <S.Texts>
                        <h1>RAZER KRAKEN PRO</h1>
                        <p>Os primeiros mouses de controle total automatizados do mundo desenvolvidos em 2016, especiais para jogos.</p>
                        <ButtonComponent
                            textButton="VER MAIS"
                        />
                    </S.Texts>
                </S.ContentHeadset>

                <S.ContentProducts>
                    <S.CardProduct>
                        <img src={Keyboard} alt="Teclado Lycosa Expert"/>
                        <h4>Razer Lycosa Expert</h4>
                        <p>R$975,00</p>
                    </S.CardProduct>

                    <S.CardProduct>
                        <img src={HeadsetProduct} alt="Headset razer Kraken Pro V3"/>
                        <h4>Razer Kraken Pro V3</h4>
                        <p>R$436,00</p>
                    </S.CardProduct>

                    <S.CardProduct>
                        <img src={Mouse} alt="Mouse Mamba"/>
                        <h4>Razer Mamba</h4>
                        <p>R$730,00</p>
                    </S.CardProduct>

                    <S.CardProduct>
                        <img src={Pad} alt="Mousepad Razer firefly Cloth"/>
                        <h4>Razer Firefly Cloth</h4>
                        <p>R$142,00</p>
                    </S.CardProduct>
                </S.ContentProducts>
            </S.SectionTwo>
        </S.SectionHeadset>
    )
}