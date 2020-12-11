const url = "https://cs4550-f20-project.herokuapp.com/api"
const key = "faa54ae99c9a46efbb6498e0a9965093"

// function verifies user exists, returns boolean
export const getIsUserAndPass = (user) => {
    fetch(`${url}/is/users/password`)
        .then(response => response.json())
}

// function determines if user already exists in database, returns boolean (true if it exists)
export const getIsUser = (username) => {
    fetch(`${url}/is/user/${username}`).then(response => response.json())
}

export const updateUser = (userId, newUser) => {
    fetch(`${url}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteUser = (userId) => {
    fetch(`${url}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

export const addUser = (user) => {
    fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

export const profile = (HttpSession) => {
    fetch(`${url}/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

export default {
    getIsUserAndPass,
    getIsUser,
    updateUser,
    deleteUser,
    addUser,
    profile
}
