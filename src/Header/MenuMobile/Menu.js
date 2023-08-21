import React, {useState} from "react";
import * as S from "./Styles.js"

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)

    function openMenu(){
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    return(
        <>
            <S.MenuSection onClick={()=>openMenu()}>
                <S.IconBurger className={menuOpen ? "open-menu" : ""} >
                    <div></div>
                    <div></div>
                    <div></div>
                </S.IconBurger>

                <S.Sidebar className={menuOpen ? "sidebar-open" : ""}>
                    
                </S.Sidebar>
            </S.MenuSection>
        </>
    )
}