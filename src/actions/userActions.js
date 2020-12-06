export const EDIT_PASSWORD = "EDIT_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const editUser = (dispatch) => {
  dispatch({
    type: EDIT_PASSWORD
  })
}

export const updateUser = (dispatch, newUser) => {
  dispatch({
    type: UPDATE_PASSWORD,
    newUser
  })
}
