import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser, logoutUser, refreshUser} from './operations'

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
        [loginUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logoutUser.fulfilled](state) {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = {...action.payload};
            state.isLoggedIn = true;
        },
    }
})

// export const {changeFilter } = authSlice.actions

export const authReducer = authSlice.reducer