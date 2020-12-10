import {
  EDIT_PASSWORD, UPDATE_PASSWORD
} from "../actions/userActions";

const initialState = {
  type: "creator",
  username: "bohnstinkybu",
  password: "poopyhead",
  isVerified: false,
  isEditing: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case EDIT_PASSWORD:
      return {
        ...state, isEditing: true
      }
    case UPDATE_PASSWORD:
      return {
    ...state,
          username: action.username,
          password: action.password,
          isEditing: false
    }
    default:
      return state
  }
}

export default userReducer
