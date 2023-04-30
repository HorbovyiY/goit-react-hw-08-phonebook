import AppBar from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <header>
            <AppBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </header>
        
    )
}

export default Layout