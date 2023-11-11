import {Routes, Route} from "react-router-dom"
import { PageLayout, Page} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<Page/>}/>
            </Route>
        </Routes>
    )
}