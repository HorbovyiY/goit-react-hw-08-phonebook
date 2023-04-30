import Button from '@mui/material/Button';

import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "redux/operations";

const UserMenu = () => {
    const email = useSelector(state => state.auth.user.email)
    const dispatch = useDispatch();

    return (
        <>
            <p>{ email }</p>
            <Button type="button" variant="outlined" color="secondary" onClick={()=>dispatch(logoutUser())}>Logout</Button>
        </>        
    )
}

export default UserMenu