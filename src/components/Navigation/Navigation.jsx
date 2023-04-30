import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import styled from "@emotion/styled";

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: rgb(25, 118, 210);
`;

const Navigation = () => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    return (
        <nav>{ isLoggedIn&&<StyledLink to="/contacts">Contacts</StyledLink>}
            
        </nav>
    )
}

export default Navigation