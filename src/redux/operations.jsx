import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../services/api";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await API.findContacts();
        return response.data;
    } catch (error){ 
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await API.addContacts(contact);
        return response.data;
    } catch (error){ 
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact  = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const response = await API.delContacts(id);
        return response.data;
    } catch (error){ 
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const registerUser = createAsyncThunk("auth/register", async (credentials) => {
    try {
        const response = await API.userSignUp(credentials);
        API.token.set(response.data.token);
        return response.data;
    } catch (error) {
        // return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
    try {
        const response = await API.userLogIn(credentials);
        API.token.set(response.data.token);
        return response.data;
    } catch (error) {
        // return thunkAPI.rejectWithValue(error.message);
    }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    try {
        await API.userLogOut();
        API.token.unset();
    } catch (error) {
        // return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
        if (persistedToken === null) { return thunkAPI.rejectWithValue()}
        API.token.set(persistedToken);
        
    try {
        const response = await API.userCurrent();
        console.log(response)
        return response.data;
    } catch (error) {
        // return thunkAPI.rejectWithValue(error.message);
    }
});