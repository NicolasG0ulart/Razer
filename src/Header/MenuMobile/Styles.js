import styled from "styled-components"

export const MenuSection = styled.div`
    display: none;
    @media(max-width: 1024px){
        display: block;
    }


// animação de abrir e fechar o menu mobile
    .open-menu{
        position: fixed;
        right: 9%;
        :nth-child(1){
            transform: rotate(45deg);
        }
        :nth-child(2){
            display: none;
        }
        :nth-child(3){
            position: absolute;
            transform: rotate(-45deg);
        }
        div{
            transition: .4s;
        }
    }

// animação do sidebar abrindo e fechando
    .sidebar-open{
        left: 0;
        position: fixed;
        z-index: 1;
    }
`
export const IconBurger = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media(max-width: 425px){
        gap: 8px;
    }
    div{
        transition: .4s;
        background-color: #00ff01;
        width: 40px;
        height: 3px;
        @media(max-width: 425px){
            width: 30px;
        }
    }
    &:hover{
        cursor: pointer;
    }
`
export const Sidebar = styled.section`
    transition: .4s;
    position: absolute;
    left: -100%;
    top: 0;
    background-color: #161616;
    width: 75%;
    height: 110%;
`