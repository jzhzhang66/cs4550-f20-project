import React from 'react';
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { addUser, getIsUser } from "../services/UserService";

// put the router in here
class Register extends React.Component {


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
                            placeholder="Alice" />
                    </div>
                </div>
                {/* Password */}
                <div className="form-group row">
                    <label for="passwordFld" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password"
                            className="form-control"
                            id="passwordFld"
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
                            placeholder="123qwe#$%" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="typeDropdown"
                        className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                        <select id="typeDropdown" class="form-select" aria-label="Default select example">
                            <option value="Creator">Creator</option>
                            <option selected value="Follower">Follower</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        {/* Sign Up */}
                        <button type="button"
                            className="btn btn-outline-secondary btn-block wbdv-button wbdv-register">
                            Sign Up
                        </button>
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

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (Register)
