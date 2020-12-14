import followingService from "../services/FollowingService"


export const UPDATE_FOLLOWERS_EXPANDED = "UPDATE_FOLLOWERS_EXPANDED";
export const UPDATE_FOLLOWING_EXPANDED = "UPDATE_FOLLOWING_EXPANDED";
export const ADD_FOLLOWING = "ADD_FOLLOWING";
export const GET_CREATORS = "GET_CREATORS";
export const GET_FOLLOWERS = "GET_FOLLOWERS";

export const updateFollowersExpanded = (dispatch, followersExpanded) => {
    dispatch({
        type: UPDATE_FOLLOWERS_EXPANDED,
        followersExpanded
    })
}

export const updateFollowingExpanded = (dispatch, followingExpanded) => {
    dispatch({
        type: UPDATE_FOLLOWING_EXPANDED,
        followingExpanded
    })
}

export const getFollowers = (dispatch, userId) => {
    debugger
    return followingService.getUserFollowingsByCreator(userId).then(status => {
        debugger
        return dispatch({
            type: GET_FOLLOWERS,
            users: status
        })})
}

export const getCreators = (dispatch, userId) => {
    debugger
    return followingService.getUserFollowingsByFollower(userId).then(status =>
        dispatch({
            type: GET_CREATORS,
            users: status
        }))
}

export const addFollowing = (dispatch, newFollowing) => {
    dispatch({
        type: ADD_FOLLOWING,
        newFollowing
    })
}
