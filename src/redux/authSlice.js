import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './operations'

// import { fetchContacts, addContact, deleteContact} from './operations';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false
    },
    extraReducers: {
        [registerUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    }
})

// export const {changeFilter } = authSlice.actions

export const authReducer = authSlice.reducer