import followingService from "../services/FollowingService"


export const UPDATE_FOLLOWERS_EXPANDED = "UPDATE_FOLLOWERS_EXPANDED";
export const UPDATE_FOLLOWING_EXPANDED = "UPDATE_FOLLOWING_EXPANDED";

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
    // followingService.
    // dispatch({
    //     type: UPDATE_FOLLOWING_EXPANDED,
    //     followingExpanded
    // })
}

export const getCreators = (dispatch, userId) => {

}

