const localurl = "http://localhost:8080/api"

const heroku = "https://planme-al.herokuapp.com/api"

const url = heroku


export const getUserFollowingsByFollower = (uid) =>
    fetch(`${url}/follower/${uid}/followings/user`, {
        method: "GET"
    })
        .then(response => response.json())

export const getUserFollowingsByCreator = (uid) => {
    debugger
    return fetch(`${url}/creator/${uid}/followings/user`, {
        method: "GET"
    })
        .then(response => {debugger 
            return response.json()})
}

export const getFollowingsByFollower = (uid) => {
    fetch(`${url}/follower/${uid}/followings`)
        .then(response => response.json())
}

export const getFollowingById = (fid) => {
    fetch(`${url}/followings/${fid}`)
        .then(response => response.json())
}

export const getAllRecentFollowing = (uid) => {
    fetch(`${url}/users/${uid}/recentfollowers`)
        .then(response => response.json())
}

export const deleteFollowing = (fid) => {
    fetch(`${url}/followings/${fid}`, {
        method: 'DELETE'
    }).then(response => response.json())
}

export const addFollowing = (newFollowing) => {
    fetch(`${url}/followings`, {
        method: 'POST',
        body: JSON.stringify(newFollowing),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export default {
    getFollowingById,
    getAllRecentFollowing,
    deleteFollowing,
    addFollowing,
    getFollowingsByFollower,
    getUserFollowingsByFollower,
    getUserFollowingsByCreator
}
