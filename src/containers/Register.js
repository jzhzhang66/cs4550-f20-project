import React from 'react';
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import {
    updateNewUser,
    updateVerifyPassword,
    createUser2,
    updateUsername,
    createUser
} from "../actions/userActions";
import '../css/Register.css'

// put the router in here
class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                {/* Username */}
                <div className="form-group row">
                    <label for="usernameFld" className="col-sm-2 col-form-label">
                        Username
              </label>
                    <div class="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                            id="usernameFld"
                            value={this.props.newUser.username}
                            onChange={(event) => this.props.updateUsername({ ...this.props.newUser, username: event.target.value })}
                            placeholder="Alice" />
                    </div>
                    <label className="col-sm-2">
                    </label>
                    {
                        this.props.isUsernameTaken && <p class="col-sm-4 errortext text-danger">Username Taken</p>
                    }
                </div>
                {/* Password */}
                <div className="form-group row">
                    <label for="passwordFld" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password"
                            className="form-control"
                            id="passwordFld"
                            value={this.props.newUser.password}
                            onChange={(event) => this.props.updateNewUser({ ...this.props.newUser, password: event.target.value })}
                            placeholder="123qwe#$%" />
                    </div>
                </div>
                {/* Verify Password */}
                <div className="form-group row">
                    <label for="verifyPasswordFld"
                        className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input type="password"
                            className="form-control"
                            id="verifyPasswordFld"
                            placeholder="123qwe#$%"
                            value={this.props.verifyPassword}
                            onChange={(event) => this.props.updateVerifyPassword(event.target.value)} />
                    </div>
                    <label className="col-sm-2">
                    </label>
                    {
                        this.props.verifyPassword !== this.props.newUser.password
                        && <p class="col-sm-4 errortext text-danger">Passwords do not match</p>
                    }
                </div>
                <div className="form-group row">
                    <label for="typeDropdown"
                        className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                        <select
                            id="typeDropdown"
                            class="form-select"
                            aria-label="Default select example"
                            onChange={(event) => this.props.updateNewUser({ ...this.props.newUser, userType: event.target.value })}>
                            <option value="creator">Creator</option>
                            <option selected value="follower">Follower</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        {/* Sign Up */}
                        {/* Need to disable button if 
                        username or password are empty,
                        password and verify password don't match,
                        username already exists*/}
                        {
                            !(this.props.isUsernameTaken ||
                                this.props.newUser.username === "" ||
                                this.props.newUser.password === "" ||
                                this.props.newUser.password !== this.props.verifyPassword) &&
                            <button type="button"
                                className="btn btn-outline-secondary btn-block"
                                onClick={() => this.props.createUser2({ ...this.props.newUser }, this.props.history)}>
                                Sign Up
                            </button>

                        }
                        {
                            (this.props.isUsernameTaken ||
                                this.props.newUser.username === "" ||
                                this.props.newUser.password === "" ||
                                this.props.newUser.password !== this.props.verifyPassword) &&
                                <button
                                type="button"
                                className="btn btn-outline-secondary btn-block"
                                disable>
                                    Fix Errors to Sign Up
                                </button>
                        }
                        {/* <button type="button"
                            className="btn btn-outline-secondary btn-block"
                            onClick={() => this.props.createUser2({ ...this.props.newUser }, this.props.history)}>
                            Sign Up
                        </button> */}
                        {/* Login */}
                        <div className="row">
                            <div className="col-sm-10">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    newUser: state.userReducer.newUser,
    verifyPassword: state.userReducer.verifyPassword,
    isUsernameTaken: state.userReducer.isUsernameTaken
})

const propertyToDispatchMapper = (dispatch) => ({
    updateNewUser: (newUser) => updateNewUser(dispatch, newUser),
    updateUsername: (newUser) => updateUsername(dispatch, newUser),
    updateVerifyPassword: (verifyPassword) => updateVerifyPassword(dispatch, verifyPassword),
    createUser: (user) => createUser(dispatch, user),
    createUser2: (newUser, history) => createUser2(dispatch, newUser, history),
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (Register)
