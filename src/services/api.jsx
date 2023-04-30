import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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

export const userLogin = (credentials) => { 
    return axios.post(`/users/login`, credentials)
}