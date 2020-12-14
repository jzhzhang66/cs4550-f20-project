export const UPDATE_FOLLOWERS_EXPANDED = "UPDATE_FOLLOWERS_EXPANDED";
export const UPDATE_FOLLOWING_EXPANDED = "UPDATE_FOLLOWING_EXPANDED";
export const ADD_FOLLOWING = "ADD_FOLLOWING";

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

export const addFollowing = (dispatch, newFollowing) => {
    dispatch({
        type: ADD_FOLLOWING,
        newFollowing
    })
}
