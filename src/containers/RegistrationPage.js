import React from 'react';
import {connect} from "react-redux";
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {addUser, getIsUser} from "../services/UserService";

// put the router in here
class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userType: '',
      verifyPassword: ''
    }
  }

  //TODO getIsUser not working
  // validation checks: are all fields filled? do passwords match? is username available?
  handleSubmit(user) {
    if (this.state.password === '' || this.state.username === ''
        || this.state.verifyPassword === '' || this.state.userType === '') {
      alert("Please fill out all fields")
    } else if (this.state.password !== this.state.verifyPassword) {
      alert("Passwords don't match");
    } else if (getIsUser(this.state.username)) {
      alert("Username already taken")
    } else {
      addUser(user).then(newUser => this.props.history.push('/profile'))
      // addUser(user).then(newUser => console.log(newUser))
    }
  }

  render() {
    return (
        <div className="container">
          <h1>Sign Up</h1>
          <form>
            {/* Username */}
            <div className="form-group row">
              <label for="usernameFld" className="col-sm-2 col-form-label">
                Username
              </label>
              <div class="col-sm-10">
                <input className="form-control wbdv-field wbdv-username"
                       id="usernameFld"
                       placeholder="Alice"
                       value={this.state.username}
                       onChange={(e) => this.setState(
                           {username: e.target.value})}/>
              </div>
            </div>
            {/* Password */}
            <div className="form-group row">
              <label for="passwordFld" className="col-sm-2 col-form-label">
                Password </label>
              <div className="col-sm-10">
                <input type="password"
                       className="form-control wbdv-field wbdv-password"
                       id="passwordFld"
                       placeholder="123qwe#$%"
                       value={this.state.password}
                       onChange={(e) => this.setState(
                           {password: e.target.value})}/>
              </div>
            </div>
            {/* Verify Password */}
            <div className="form-group row">
              <label for="verifyPasswordFld"
                     className="col-sm-2 col-form-label">
                Verify Password </label>
              <div className="col-sm-10">
                <input type="password"
                       className="form-control wbdv-field wbdv-password-verify"
                       id="verifyPasswordFld"
                       onChange={(e) => this.setState(
                           {verifyPassword: e.target.value})}
                       value={this.state.verifyPassword}
                       placeholder="123qwe#$%"/>
              </div>
            </div>
            <div className="form-group row">
              <label for="typeDropdown"
                     className="col-sm-2 col-form-label">Type</label>
              <div className="col-sm-10">
                {/*Type*/}
                <div className="form-check">
                  <input className="form-check-input" type="radio"
                         name="userTypeRadio" id="follower"
                         value={this.state.userType}
                         onChange={() => this.setState({userType: 'follower'})}/>
                  <label className="form-check-label"
                         for="follower">Follower</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio"
                         name="userTypeRadio" id="creator"
                         value={this.state.userType}
                         onChange={() => this.setState({userType: 'creator'})}/>
                  <label className="form-check-label"
                         htmlFor="creator">Creator</label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"></label>
              <div className="col-sm-10">
                {/* Sign Up */}
                <button type="submit"
                    // formAction="../profile/profile.template.client.html"
                        className="btn btn-outline-secondary btn-block wbdv-button wbdv-register"
                        onClick={() => this.handleSubmit(this.state)}>
                  Sign Up
                </button>
                {/* Login */}
                <div className="row">
                  <div className="col-sm-10">
                    <Link to="/login" class="wbdv-link wbdv-login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({})

const propertyToDispatchMapper = (dispatch) => ({
  // getIsUser: (username) => getIsUser(dispatch, username)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(RegistrationPage)
