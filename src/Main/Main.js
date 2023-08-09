import React from "react";
import * as S from "./Styles"

//components
import MouseSection from "./SectionMouse/Mouse.js"
import HeadsetSection from "./SectionHeadset/Headset";
import InsiderSection from "./SectionInsider/InsiderSection"
import DepositionsSection from "./SectionDepositions/DepositionsSection";

//images


export default function Main(){

    return(
        <S.SectionMain>
            <MouseSection/>
            <HeadsetSection/>
            <InsiderSection/>
            <DepositionsSection/>
        </S.SectionMain>
    )
}