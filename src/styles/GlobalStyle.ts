import { createGlobalStyle } from "styled-components"
import polygons from "../img/polygons.png"

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,700;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Libre Franklin', sans-serif;
}

body{
    background-image: url(${polygons});
    background-repeat: no-repeat;
    background-size: cover;
}


`


export const colors = {
    blue: "#062D54",
    azul: "#062D54",
    laranjaC: "#FFD699",
    laranjaE: "#FF6100",
    branco: "#ffff"
}