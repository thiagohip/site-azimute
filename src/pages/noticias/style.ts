import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Noticias = styled.main`
    width: 100%;
    height: 100%;
    #template{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    #noticias{
        width: 1265px;
        height: 1948px;
        background-color: white;
        box-shadow: 1px 1px 5px 1px black;
        header{
            width: 100%;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 60px;
            div{
                color: ${colors.azul};
                h1{
                    font-size: 5rem;
                    font-family: 'Shrikhand', serif;
                }
                p{
                    font-size: 2rem;
                    font-family: 'Alatsi', sans-serif;
                }
            }
        }
        main{
            width: 100%;
            height: 79.5%;
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-around;
        }
    }
`