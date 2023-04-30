import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "redux/operations";

const UserMenu = () => {
    const name = useSelector(state => state.auth.user.name)
    const dispatch = useDispatch();

    return (
        <>
            <p>{ name }</p>
            <button type="button" onClick={()=>dispatch(logoutUser())}>Logout</button>
        </>        
    )
}

export default UserMenu