import React from "react";
import {connect} from "react-redux";
import {
  editPassword,
  updatePassword
} from "../actions/userActions";
import {profile, updateUser} from "../services/UserService";

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      username: '',
      password: '',
      userType: '',
      verifyPassword: '',
      isEditing: true
    }
  }

  componentDidMount() {
    // profile().then(profile => this.setState({
    //   username: profile.username,
    //   password: profile.password,
    //   userId: profile.userId,
    //   userType: profile.userType
    // }))
  }

  // validation: does verify password match?
  handleSubmit() {
    if (this.state.password !== this.state.verifyPassword) {
      alert("Passwords don't match");
    } else {
      updateUser(this.state.userId, {userId: this.userId, username: this.username, password: this.password, type: this.type})
    }
  }

  //TODO implement username edit
  render() {
    return (
        <div className="container">
          <h1 className="header-styling">Edit Profile</h1>
          <form>
            {/* Username */}
            <div className="form-group row">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                Username
              </label>
              <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-username"
                       id="username"
                       value={this.state.username}
                       onChange={(e) => this.setState({username: e.target.value})}
                       disabled={!this.state.isEditing}/>
              </div>
            </div>
            {/* Password */}
            <div className="form-group row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password </label>
              <div className="col-sm-8">
                <input type="password"
                       className="form-control wbdv-field wbdv-password"
                       id="password"
                       placeholder="123qwe#$%"
                       value={this.state.password}
                       onChange={(e) => this.setState(
                           {password: e.target.value})}
                       disabled={!this.state.isEditing}/></div>
              <div className="col-sm">
                <button className="btn btn-outline-secondary"
                        onClick={() => this.setState({isEditing: true})}>Edit
                </button>
              </div>
            </div>

            {this.state.isEditing && <div className="form-group row">
              <label className="col-sm-2 col-form-label">Verify
                Password</label>
              <div className="col-sm-8">
                <input type="password"
                       className="form-control wbdv-field wbdv-password"
                       id="password"
                       placeholder="123qwe#$%"
                       value={this.state.verifyPassword}
                       onChange={(e) => this.setState(
                           {verifyPassword: e.target.value})}/>
              </div>
              <div className="col-sm">
                <button className="btn btn-outline-secondary"
                        onClick={() => this.handleSubmit()}>
                  Submit
                </button>
              </div>
            </div>}
          </form>
        </div>
    )
  }
}

// } = (username, password, isEditing, editPassword,
//     updatePassword) => {

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
