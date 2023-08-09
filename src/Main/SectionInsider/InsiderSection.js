import React from "react";
import * as S from "./Styles"

//components
import Button from "../../components/button/button"


export default function InsiderSection(){

    return(
        <>
            <S.SectionInsider>
                <S.FirstSectionInsider>
                        <h1>RAZER INSIDER</h1>
                        <p>FROM GAMERS TO GAMERS</p>
                </S.FirstSectionInsider>
            </S.SectionInsider>

            <S.SecoundSectionInsider>
                <S.ContentInsider>
                    <div>
                        <h5>QUEBRANDO O MAR COM RAZER</h5>
                        <p>Junte-se a nós no Six Invitational, onde veremos novos mostruários de conteúdo, desenvolvedores e painéis comunitários.</p>
                    </div>
                    <div>
                        <h5>BEM-VINDO À EQUIPE RAZER, NEXTBIT!</h5>
                        <p>Temos o prazer de anunciar que a Nextbit se juntou à família Razer", damos as boas-vindas à equipe altamente talentosa.</p>
                    </div>
                    <div>
                        <h5>RAZER BLACKWINDOW CHROME V2</h5>
                        <p>O novo Razer BlackWindow Chroma V2 agora disponível com o Razer Machanical Verde, Laranja e Amarelo.</p>
                    </div>
                </S.ContentInsider>
                
                    <Button
                        textButton="Entrar na comunidade"
                    />
            </S.SecoundSectionInsider>
        </>
    )
}