import {Routes, Route} from "react-router-dom"
import { PageLayout, Page, Page2} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<Page/>}/>
                <Route path="page2" element={<Page2/>}/>
            </Route>
        </Routes>
    )
}