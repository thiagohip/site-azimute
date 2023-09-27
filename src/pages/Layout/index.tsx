import { Outlet } from "react-router-dom"
import * as style from "./styles"

export function Layout() {
  return (
    <>
      <style.Layout>
        <Outlet />
      </style.Layout>
    </>
  )
}