import { NavLink } from "react-router-dom"
import styled from '@emotion/styled'

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: rgb(25, 118, 210);
`;

const AuthNav = () => {
    return (
        <>
            <StyledLink to="/register"> Register </StyledLink>
            <StyledLink to="/login"> Login </StyledLink>
        </>
    )
}

export default AuthNav