import {
    UPDATE_FOLLOWERS_EXPANDED,
    UPDATE_FOLLOWING_EXPANDED,
    ADD_FOLLOWING
} from "../actions/profileActions";

const initialState = {
    followersExpanded: false,
    followingExpanded: false,
    followers: [
        { id: 123, name: 'Ashley Kim' },
        { id: 234, name: 'Laurel Guo' },
        { id: 345, name: 'Shine Kim' },
        { id: 456, name: 'Meggie Chong' },
        { id: 567, name: 'Yerin Myung' }
    ],
    following: [
        { id: 321, name: 'Bohn Bu' },
        { id: 432, name: 'Baustin Kim' },
        { id: 543, name: 'Helyin Yang' },
        { id: 654, name: 'Lizzzyyyy Zhang' },
        { id: 765, name: 'Christian Chou' }
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
                followers: [action.newFollowing]
            }
        default: 
            return state
    }
} 

export default profileReducer
