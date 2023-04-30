import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/operations";

export const Register = () => { 
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => { 
        if (e.currentTarget.name === 'name') { 
            setName(e.currentTarget.value)
        }
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
            name: e.currentTarget.elements.name.value,
            email: e.currentTarget.elements.email.value,
            password: e.currentTarget.elements.password.value
        }

        dispatch(registerUser(newContact));
        
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
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
                <button type="submit">Add contact</button>
            </form>
        </>
    )
}