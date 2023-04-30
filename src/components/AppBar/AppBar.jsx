import AuthNav from "components/AuthNav/AuthNav"
import Navigation from "components/Navigation/Navigation"
import UserMenu from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"

const AppBar = () => {
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    return (
        <header>
            <Navigation />
            { isLoggedIn?<UserMenu/>:<AuthNav/> }
        </header>
        
    )
}

export default AppBar