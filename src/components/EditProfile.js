import React from "react";
import {connect} from "react-redux";
import {
  editUser,
    updateUser
} from "../actions/userActions";

const EditProfile = (username, password, isEditing, editPassword,
    updatePassword) => {
  debugger
  console.log(password.password)
  return <div className="container">
    <h1 className="header-styling">Edit Profile</h1>
    <form>
      {/* Username */}
      <div className="form-group row">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input className="form-control wbdv-field wbdv-username"
                 id="username" value={username.username}/>
        </div>
      </div>
      {/* Password */}
      <div className="form-group row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password </label>
        <div className="col-sm-10">
          {!isEditing &&
          <label>{password.password}</label>}
          {isEditing &&
          <input type="password"
                 className="form-control wbdv-field wbdv-password"
                 id="password"
                 placeholder="123qwe#$%"/>}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label"></label>
      </div>
    </form>
  </div>
}
const stateToPropertyMapper = (state) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  isEditing: state.userReducer.isEditing
})

const propertyToDispatchMapper = (dispatch) => ({
  updatePassword: (newUser) => updatePassword(dispatch, newUser),
  editPassword: () => editPassword(dispatch)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(EditProfile)
