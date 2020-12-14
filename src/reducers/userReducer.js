import {
  EDIT_PASSWORD,
  UPDATE_PASSWORD,
  GET_IS_USER,
  UPDATE_NEWUSER,
  UPDATE_VERIFYPASSWORD,
  UPDATE_USERNAME,
  CREATE_USER,
  WRONG_LOGIN,
  SIGN_IN

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
  isUsernameTaken: false,
  isWrong: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //not me
    case EDIT_PASSWORD:
      return {
        ...state,
        isEditing: true
      }
    //not me
    case UPDATE_PASSWORD:
      return {
        ...state,
        username: action.username,
        password: action.password,
        isEditing: false
      }
    //not me
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
    case WRONG_LOGIN:
      debugger
      return {
        ...state,
        isWrong: true
      }
    case SIGN_IN:
      debugger
      return {
        ...state,
        isWrong: false,
        user: action.user
      }
    default:
      return state
  }
}

export default userReducer
