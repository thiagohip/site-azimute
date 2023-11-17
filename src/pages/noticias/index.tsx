import * as s from "./style"
import jornal from "../../img/jornal.png"
import { Noticia } from "../../components"


export function Noticias(){

    return(
        <s.Noticias>
            <div id="template">
                <div id="noticias">
                    <header>
                        <div>
                            <h1>Notícias</h1>
                            <p>Fique por dentro das ultimas <br/> notícias do programa!</p>
                        </div>
                        <img src={jornal} alt="" />
                    </header>
                    <main>
                        <Noticia />
                        <Noticia />
                        <Noticia />
                        <Noticia />
                        <Noticia />
                        <Noticia />
                        <Noticia />
                        <Noticia />
                    </main>
                </div>
            </div>
        </s.Noticias>
    )
}