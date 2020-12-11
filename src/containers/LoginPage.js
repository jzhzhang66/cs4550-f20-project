import React from 'react';
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import {getIsUser, getIsUserAndPass} from "../services/UserService";

// put the router in here
class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  // validation checks: does username already exist? is username/password input non-empty?
  handleLogin() {
    if (this.state.username === '' || this.state.password === '') {
      alert("Empty username or password")
    } else if (getIsUser(this.state.username)) {
      alert("Username already exists, please try another")
    } else if (getIsUserAndPass(this.state)) {
      this.props.history.push('/profile')
    } else {
      alert("Username and password don't match, please try again")
    }
  }

  render() {
    return (
        <div class="container">
        <h1 className="header-styling">Sign In</h1>
        <form>
            {/* Username */}
            <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">
                    Username
                </label>
                <div class="col-sm-10">
                    <input class="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Alice"
                           value={this.state.username}
                           onChange={(e) => this.setState({username: e.target.value})}/>
                </div>
            </div>
            {/* Password */}
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">
                    Password </label>
                <div class="col-sm-10">
                    <input type="password" class="form-control wbdv-field wbdv-password"
                           id="password"
                           placeholder="123qwe#$%"
                           value={this.state.password}
                           onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    {/* Sign In */}
                    <button type="submit"
                            // formaction="/profile"
                            onClick={() => this.handleLogin()}
                            class="btn btn-outline-secondary btn-block wbdv-button wbdv-login">Sign in</button>
                    <div class="row">
                        {/* Forgot Password */}
                        <div class="col-6">
                            <a href="#" class="wbdv-link wbdv-forgot-password">Forgot Password?</a>
                        </div>
                        {/* Sign Up */}
                        <div class="col-6">
                            <Link to="/register"
                                class="float-right wbdv-link wbdv-register">Sign up
                            </Link>
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
    (LoginPage)
