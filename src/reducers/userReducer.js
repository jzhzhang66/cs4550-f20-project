import {
  EDIT_PASSWORD,
  UPDATE_PASSWORD,
  GET_IS_USER,
  UPDATE_NEWUSER,
  UPDATE_VERIFYPASSWORD,
  UPDATE_USERNAME,
  CREATE_USER

} from "../actions/userActions";

const initialState = {
  newUser: {
    username: "",
    password: "",
    userType: "follower"
  },
  user: {},
  verifyPassword: "",
  isEditing: false,
  isUsernameTaken: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PASSWORD:
      return {
        ...state,
        isEditing: true
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        username: action.username,
        password: action.password,
        isEditing: false
      }
    case GET_IS_USER:
      return {
        ...state
      }
    case UPDATE_NEWUSER:
      return {
        ...state,
        newUser: action.newUser
      }
    case UPDATE_USERNAME:
      debugger
      return {
        ...state,
        newUser: action.newUser,
        isUsernameTaken: action.isUsernameTaken
      }
    case UPDATE_VERIFYPASSWORD:
      return {
        ...state,
        verifyPassword: action.verifyPassword
      }
    case CREATE_USER:
      return {
        ...state,
        user: action.newUser
      }
    default:
      return state
  }
}

export default userReducer
