import {Routes, Route} from "react-router-dom"
import { PageLayout, Noticias} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="noticias" element={<Noticias/>}/>
            </Route>
        </Routes>
    )
}