import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 0 18.5%;
    padding-top: 150px;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-image: url("imgs/background/Vector.png"); /* Caminho para sua imagem */
        background-position: center; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        background-size: 47%;
        transform: translate(-23%, -76%) rotate(0deg);
        z-index: -1; /* Garante que a imagem de fundo fique atrás do conteúdo */
    }
`