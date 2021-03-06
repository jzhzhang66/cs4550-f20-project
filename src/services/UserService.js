import {URL} from "./DailyPlanService"

const url = URL;

//testing

// function verifies user exists, returns boolean
export const getIsUserAndPass = (user) => {
    return fetch(`${url}/is/users/password`)
        .then(response => response.json())
}

// function determines if user already exists in database, returns boolean (true if it exists)
export const getIsUser = (username) => {
    debugger
    return fetch(`${url}/is/user/${username}`).then(response => response.json())
}

export const updateUser = (userId, newUser) => {
    debugger
    return fetch(`${url}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            debugger 
            return response.json()})
}

export const deleteUser = (userId) => {
    return fetch(`${url}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

export const addUser = (user) => {
    debugger
    return fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());
}

export const signIn = (user) => {
    debugger
    return fetch(`${url}/users/signin`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());
}

export const profile = () => {
    debugger
    return fetch(`${url}/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json());
}

export const getAllUsers = () => {
    return fetch(`${url}/users`).then(response => response.json())
}

export const getUserById = (userId) => {
    return fetch(`${url}/user/${userId}`).then(response => response.json())
}

export default {
    getIsUserAndPass,
    getIsUser,
    updateUser,
    deleteUser,
    addUser,
    profile,
    signIn,
    getAllUsers,
    getUserById
}
