import  Styled  from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Noticia = Styled.article`
    
    h1{
        font-family: 'Alatsi', sans-serif;
        color: ${colors.blue};
        font-size: 3rem
    }

    p{
        font-family: 'Alatsi', sans-serif;
        color: black;
        font-size: 2rem;
        padding-top: 30px;
    }
    
    padding: 30px;

    width: 563px;
    height: 337px;
    border: solid 1px ${colors.azul};
`

