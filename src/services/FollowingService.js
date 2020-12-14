const url = "http://localhost:8080/api"





export const getUserFollowingsByFollower = (uid) =>
    fetch(`${url}/follower/${uid}/followings/user`, {
        method: "GET"
    })
        .then(response => response.json())



export default {
    getUserFollowingsByFollower
}
