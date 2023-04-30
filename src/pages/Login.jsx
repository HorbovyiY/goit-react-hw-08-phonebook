import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/operations";

export const Login = () => { 
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => { 
        if (e.currentTarget.name === 'email') { 
            setEmail(e.currentTarget.value)
        }
        if (e.currentTarget.name === 'password') { 
            setPassword(e.currentTarget.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            email: e.currentTarget.elements.email.value,
            password: e.currentTarget.elements.password.value
        }

        dispatch(loginUser(newContact));
        
        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}