import userService from "../services/UserService"

export const EDIT_PASSWORD = "EDIT_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const GET_IS_USER = "GET_IS_USER";
export const UPDATE_NEWUSER = "UPDATE_NEWUSER"
export const UPDATE_VERIFYPASSWORD = "UPDATE_VERIFYPASSWORD"
export const UPDATE_USERNAME = "UPDATE_USERNAME"
export const CREATE_USER = "CREATE_USER"
export const WRONG_LOGIN = "WRONG_LOGIN"
export const SIGN_IN = "SIGN_IN"

//not mine
export const editPassword = (dispatch) => {
  dispatch({
    type: EDIT_PASSWORD
  })
}

//not mine
export const getIsUser = (dispatch, username) => {
  userService.getIsUser(username).then(status => dispatch({
    type: GET_IS_USER,
    username
  }))
}


//fix this
export const updatePassword = (dispatch, newUser) => {
  debugger
  return userService.getIsUser(newUser.username).then(status =>
    dispatch({
      type: UPDATE_NEWUSER,
      newUser,
      isUsernameTaken: status
    }))
}
//-------Functions for relogging in
export const profile = (dispatch) => {
  debugger
  return userService.profile().then(status =>
    dispatch({
      type: SIGN_IN,
      user: status,
    }))
}

//------- Functions for Login ----------

export const signIn = (dispatch, user, history) => {
  debugger
  return userService.signIn(user)
    .then(status => {
      debugger
      if(status.username === null) {
        dispatch({
          type: WRONG_LOGIN
        })
      } else {
        dispatch({
          type: SIGN_IN,
          user: status
        })
        history.push('/profile')
      }
    })
}



//------- Functions for Registration -----

export const updateUsername = (dispatch, newUser) => {
  debugger
  if (newUser.username == "") {
    return dispatch({
      type: UPDATE_USERNAME,
      newUser,
      isUsernameTaken: false
    })
  }
  else {
    return userService.getIsUser(newUser.username).then(status =>
      dispatch({
        type: UPDATE_USERNAME,
        newUser,
        isUsernameTaken: status
      }))
  }
}

export const updateNewUser = (dispatch, newUser) => {
  debugger
  return dispatch({
    type: UPDATE_NEWUSER,
    newUser
  })
}

export const updateVerifyPassword = (dispatch, verifyPassword) => {
  debugger
  dispatch({
    type: UPDATE_VERIFYPASSWORD,
    verifyPassword
  })
}

export const createUser = (dispatch, newUser) => {
  debugger
  return userService.addUser(newUser)
    .then(status =>
      dispatch({
        type: CREATE_USER,
        newUser: status
      }))
}

export const createUser2 = (dispatch, newUser, history) => {
  debugger
  return userService.addUser(newUser)
    .then(status => {
      dispatch({
        type: CREATE_USER,
        newUser: status
      })
      history.push('/profile')
    })
}