import React from 'react';
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import {addUser} from "../services/UserService";


// put the router in here
class RegistrationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      type: '',
      verifyPassword: ''
    }
  }
  // this should handle all validation
  handleSubmit() {
    if (this.password !== this.verifyPassword) {
      alert("Passwords don't match");
    } else {
      addUser(this.state).then(newUser => this.props.history.push('/profile'))
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
                       onChange={(e) => this.setState({username: e.target.value})}/>
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
                       onChange={(e) => this.setState({password: e.target.value})}/>
              </div>
            </div>
            {/* Verify Password */}
            <div className="form-group row">
              <label for="verifyPasswordFld" className="col-sm-2 col-form-label">
                Verify Password </label>
              <div className="col-sm-10">
                <input type="password"
                       className="form-control wbdv-field wbdv-password-verify"
                       id="verifyPasswordFld"
                       onChange={(e) => this.setState({verifyPassword: e.target.value})}
                       value={this.state.verifyPassword}
                       placeholder="123qwe#$%"/>
              </div>
            </div>
            <div className="form-group row">
              <label for="typeDropdown" className="col-sm-2 col-form-label">Type:</label>
              <div className="col-sm-10">
                {/*Type*/}
                <div className="dropdown">
                  <button className="btn dropdown-toggle"
                          type="button"
                          id="typeDropdown">
                  </button>
                  <div className="dropdown-menu"
                       aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">Planner</a>
                    <a className="dropdown-item">Follower</a>
                  </div>
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
                        onClick={() => this.handleSubmit()}>
                  Sign Up
                </button>
                {/* Login */}
                <div className="row">
                  <div className="col-6">
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

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(RegistrationPage)
