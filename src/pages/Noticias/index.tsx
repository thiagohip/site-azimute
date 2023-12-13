import * as s from "./style"
import jornal from "../../img/jornal.png"
import { Noticia } from "../../components"
import { usePosts } from "../../services/data/Posts"

/*
interface INoticias{
    limit: number
    total: number
    offset: number
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1)/2;

*/

export function Noticias(){

    const posts = usePosts()

    /*const current*/

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
                        {posts.map((post) => (
                            <Noticia key={post.index} title={post.title} lead={post.lead}/>
                        ))}
                    </main>
                </div>
            </div>
        </s.Noticias>
    )
}
