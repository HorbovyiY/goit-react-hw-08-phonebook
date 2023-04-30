import { NavLink } from "react-router-dom"

const AuthNav = () => {
    return (
        <>
            <NavLink to="/"> Register </NavLink>
            <NavLink to="/login">Login</NavLink>
        </>
    )
}

export default AuthNav