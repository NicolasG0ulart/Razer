import React from "react";
import * as S from "./Styles"

//components
import MouseSection from "./SectionMouse/Mouse.js"
import HeadsetSection from "./SectionHeadset/Headset";

//images


export default function Main(){

    return(
        <S.SectionMain>
            <MouseSection/>
            <HeadsetSection/>
        </S.SectionMain>
    )
}