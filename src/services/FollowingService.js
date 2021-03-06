import {URL} from "./DailyPlanService"

const url = URL


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
    return fetch(`${url}/follower/${uid}/followings`)
        .then(response => response.json())
}

export const getFollowingById = (fid) => {
    return fetch(`${url}/followings/${fid}`)
        .then(response => response.json())
}

export const getAllRecentFollowing = (uid) => {
    return fetch(`${url}/users/${uid}/recentfollowers`)
        .then(response => response.json())
}

// export const deleteFollowing = (fid) => {
//     debugger
//     return fetch(`${url}/followings/${fid}`, {
//         method: 'DELETE'
//     }).then(response => response.json())
// }

export const deleteFollowingByFollowerAndCreator = (fid, cid) => {
    debugger
    return fetch(`${url}/followings/${fid}/followers/${cid}/creators`, {
        method: 'DELETE'
    }).then(response => response.json())
}

export const addFollowing = (newFollowing) => {
    return fetch(`${url}/followings`, {
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
    addFollowing,
    getFollowingsByFollower,
    getUserFollowingsByFollower,
    getUserFollowingsByCreator,
    deleteFollowingByFollowerAndCreator
}
