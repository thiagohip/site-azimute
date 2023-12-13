import  Styled  from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Noticia = Styled.article`
    
    h1{
        font-family: 'Alatsi', sans-serif;
        color: ${colors.blue};
        font-size: 2rem
    }

    p{
        font-family: 'Alatsi', sans-serif;
        color: black;
        font-size: 1.5rem;
        padding-top: 30px;
    }
    
    padding: 30px;

    width: 563px;
    height: 337px;
    border: solid 1px ${colors.azul};
    display: flex;
    flex-direction: column;

    div{
        margin: 0 auto auto 0;
        
    }

    .ler_mais{
        margin: auto 0 0 auto;
        font-weight: bold;
        font-size: 1.5rem;
        color : white;
        background-color: ${colors.blue};
        height: 2.8rem;
        width: 100%;
        border-radius: 0.6rem;
    }
    .ler_mais:hover{
            cursor: pointer;
        }
`

