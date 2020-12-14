import React from 'react';
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { updateNewUser, signIn } from "../actions/userActions";
import '../css/Register.css'

// put the router in here
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    // validation checks: does username already exist? is username/password input non-empty?


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
                                value={this.props.newUser.username}
                                onChange={(event) => this.props.updateNewUser({ ...this.props.newUser, username: event.target.value })} />
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
                                value={this.props.newUser.password}
                                onChange={(event) => this.props.updateNewUser({ ...this.props.newUser, password: event.target.value })} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10">
                            {/* Sign In */}
                            <button type="button"
                                class="btn btn-outline-secondary btn-block"
                                onClick={() => this.props.signIn({ ...this.props.newUser }, this.props.history)}>Sign in</button>
                            {
                                this.props.isWrong && <p class="text-center errortext text-danger">Wrong username or password</p>
                            }
                            <div class="row">
                                {/* Forgot Password */}
                                <div class="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                {/* Sign Up */}
                                <div class="col-6">
                                    <Link to="/register"
                                        class="float-right">
                                        Sign up
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
    newUser: state.userReducer.newUser,
    isWrong: state.userReducer.isWrong
})

const propertyToDispatchMapper = (dispatch) => ({
    updateNewUser: (newUser) => updateNewUser(dispatch, newUser),
    signIn: (newUser, history) => signIn(dispatch, newUser, history),
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (LoginPage)
