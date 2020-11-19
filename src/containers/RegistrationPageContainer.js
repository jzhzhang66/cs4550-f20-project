import React from 'react';
import { connect } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';




// put the router in here
class RegistrationPageContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }


  render() {
    return (
        <div class="container">
        <h1>Sign Up</h1>
        <form>
            {/* Username */}
            <div class="form-group row">
                <label for="usernameFld" class="col-sm-2 col-form-label">
                    Username
                </label>
                <div class="col-sm-10">
                    <input class="form-control wbdv-field wbdv-username" id="usernameFld" placeholder="Alice"/>
                </div>
            </div>
            {/* Password */}
            <div class="form-group row">
                <label for="passwordFld" class="col-sm-2 col-form-label">
                    Password </label>
                <div class="col-sm-10">
                    <input type="password" class="form-control wbdv-field wbdv-password" id="passwordFld"
                        placeholder="123qwe#$%"/>
                </div>
            </div>
            {/* Verify Password */}
            <div class="form-group row">
                <label for="verifyPasswordFld" class="col-sm-2 col-form-label">
                    VerifyPassword </label>
                <div class="col-sm-10">
                    <input type="password" class="form-control wbdv-field wbdv-password-verify" id="verifyPasswordFld"
                        placeholder="123qwe#$%"/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    {/* Sign Up */}
                    <button type="submit" formaction="../profile/profile.template.client.html" class="btn btn-outline-secondary btn-block wbdv-button wbdv-register">Sign Up</button>
                    {/* Login */}
                    <div class="row">
                        <div class="col-6">
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
    (RegistrationPageContainer)