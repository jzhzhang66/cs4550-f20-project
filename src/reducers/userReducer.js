import {
  EDIT_PASSWORD, UPDATE_PASSWORD, GET_IS_USER
} from "../actions/userActions";

const initialState = {
  username: "",
  password: "",
  verifyPassword: "",
  userType: "creator",
  isEditing: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state
  }
}

export default userReducer
