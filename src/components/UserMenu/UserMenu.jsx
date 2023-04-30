import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "redux/operations";

const UserMenu = () => {
    const email = useSelector(state => state.auth.user.email)
    const dispatch = useDispatch();

    return (
        <>
            <p>{ email }</p>
            <button type="button" onClick={()=>dispatch(logoutUser())}>Logout</button>
        </>        
    )
}

export default UserMenu