import {
    UPDATE_FOLLOWERS_EXPANDED,
    UPDATE_FOLLOWING_EXPANDED,
    ADD_FOLLOWING,
    GET_FOLLOWERS,
    GET_CREATORS
} from "../actions/profileActions";

const initialState = {
    followersExpanded: false,
    followingExpanded: false,
    followers: [
        { id: 123, username: 'Ashley Kim' },
        { id: 234, username: 'Laurel Guo' },
        { id: 345, username: 'Shine Kim' },
        { id: 456, username: 'Meggie Chong' }
    ],
    following: [
        { id: 321, username: 'Bohn Bu' },
        { id: 432, username: 'Baustin Kim' },
        { id: 543, username: 'Helyin Yang' },
        { id: 654, username: 'Lizzzyyyy Zhang' },
        { id: 765, username: 'Christian Chou' }
    ]

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FOLLOWERS_EXPANDED:
            return {
                ...state,
                followersExpanded: action.followersExpanded
            }
        case UPDATE_FOLLOWING_EXPANDED:
            return {
                ...state,
                followingExpanded: action.followingExpanded
            }
        case ADD_FOLLOWING:
            return {
                ...state,
                followers: action.newFollowing
            }
        case GET_FOLLOWERS:
            debugger
            return {
                ...state,
                followers: action.users
            }
        case GET_CREATORS:
            return {
                ...state,
                followings: action.users
            }
        default:
            return state
    }
}

export default profileReducer
