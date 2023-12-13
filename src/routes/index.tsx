import {Routes, Route} from "react-router-dom"
import { PageLayout, PageNoticias, PageLogin, PageWrite, PageNoticia} from "../pages"
import ProtectedRoute from "./ProtectedRoute"
import { usePosts } from "../services/data/Posts"

export function RouteSoftware(){

    const posts = usePosts();
    
    const rotas = []

    

    for (let index = 0; index < posts.length; index++) {
        console.log(posts[index].updatedAt)
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const data1 = new Date(posts[index].updated_at);
        const data = "Varginha, " + data1.toLocaleDateString('pt-Br', options);
        rotas.push(<Route path={posts[index].title.replace(' ', '_').replace(',', '').replace('.', '')} element={<PageNoticia title={posts[index].title} main={posts[index].main} date={data}/>}/>)
    }

    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="noticias" element={<PageNoticias/>}/>
                {rotas}
            </Route>
            <Route path="/login" element={<PageLogin/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/escrever" element={<PageWrite/>}/>
            </Route>
        </Routes>
    )
}