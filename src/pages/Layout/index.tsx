import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter, SaibaMais} from "../../components"
import * as style from "./styles"

export function Layout() {

  return (
    <>
      
      <ComponentHeader />
      <style.Layout>
        <Outlet />
      </style.Layout>
      <SaibaMais />
      <ComponentFooter />
    </>
  )
}