import { useState } from "react";
import * as style from "./style"
import seta from "../../../img/seta.png"


interface ComponentProps{
    titulos: string[];
    links: string[];
    categoria: string;
}

export function Gaveta(props: ComponentProps) {


    const tags = []

    for (let index = 0; index < props.titulos.length; index++) {
        tags.push(<li><a href={props.links[index]}>{props.titulos[index]}</a></li>)
    }

    

    const [arrowClass, setArrowClass] = useState("arrow-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
  
    const updateMenu = () => {
      if (!isMenuClicked) {
        setArrowClass("arrow-bar clicked");
        setMenuClass("menu visible");
      } else {
        setArrowClass("arrow-bar unclicked");
        setMenuClass("menu hidden");
      }
      setIsMenuClicked(!isMenuClicked);
    }
  
    return (
      <style.Gaveta>

        <div className="NavBar">
          <nav>
            <div className={`arrow-menu ${arrowClass}`} onClick={updateMenu}>
              <button className="categoria">{props.categoria}</button>
              <img src={seta} alt="" />
            </div>
          </nav>
        </div>

        <div className={menuClass}>
            <ul>
              {tags}
            </ul>
        </div>
      </style.Gaveta>
    );
  }