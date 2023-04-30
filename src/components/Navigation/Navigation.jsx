import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

const Navigation = () => {
    return (
        <>
        <nav>
            <NavLink to="/"> Register </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
            
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>
        
    )
}

export default Navigation