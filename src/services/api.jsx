import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){ 
        axios.defaults.headers.common.Authorization=``
    }
}

export const findContacts = () => { 
    return axios.get(`/contacts`)
}

export const addContacts = (contact) => { 
    return axios.post(`/contacts`, contact)
}

export const delContacts = (id) => { 
    return axios.delete(`/contacts/${id}`)
}

export const userSignUp = (credentials) => { 
    return axios.post(`/users/signup`, credentials)
}

export const userLogIn = (credentials) => { 
    return axios.post(`/users/login`, credentials)
}

export const userLogOut = () => { 
    return axios.post(`/users/logout`)
}

export const userCurrent = () => { 
    return axios.get(`/users/current`)
}