import {
  EDIT_USER,
  UPDATE_USER,
  GET_IS_USER,
  UPDATE_NEWUSER,
  UPDATE_VERIFYPASSWORD,
  UPDATE_USERNAME,
  CREATE_USER,
  WRONG_LOGIN,
  SIGN_IN,

} from "../actions/userActions";

const initialState = {
  newUser: {
    username: "",
    password: "",
    userType: "follower"
  },
  user: {
    id: ""
  },
  tempUser: {

  },
  verifyPassword: "",
  isUsernameTaken: false,
  isWrong: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        tempUser: action.tempUser
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.tempUser,
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
        user: action.newUser,
        tempUser: action.newUser
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
        user: action.user,
        tempUser: action.user
      }
    default:
      return state
  }
}

export default userReducer
