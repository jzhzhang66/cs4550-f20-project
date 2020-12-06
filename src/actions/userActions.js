export const EDIT_PASSWORD = "EDIT_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

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
