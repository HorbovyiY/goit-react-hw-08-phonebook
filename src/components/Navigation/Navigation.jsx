import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    return (
        <nav>{ isLoggedIn&&<NavLink to="/contacts">Contacts</NavLink>}
            
        </nav>
    )
}

export default Navigation