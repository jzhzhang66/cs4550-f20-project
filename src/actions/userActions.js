import userService from "../services/UserService"
export const EDIT_PASSWORD = "EDIT_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const GET_IS_USER = "GET_IS_USER";


export const editPassword = (dispatch) => {
  dispatch({
    type: EDIT_PASSWORD
  })
}

export const updatePassword = (dispatch, newPassword) => {
  dispatch({
    type: UPDATE_PASSWORD,
    newPassword
  })
}

export const getIsUser = (dispatch, username) => {
  userService.getIsUser(username).then(status => dispatch({
    type: GET_IS_USER,
    username
  }))
}
