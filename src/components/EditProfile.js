import React from "react";
import { connect } from "react-redux";
import {
    editUser,
    updateUser,
    updateVerifyPassword
} from "../actions/userActions";
import { profile } from "../actions/userActions";

class EditProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.profile().then(() => {
            debugger
            if (this.props.user.id === "") {
                this.props.history.push('/login')
            }

        })
    }


    //TODO implement username edit
    render() {
        return (
            <div className="container">
                <h1 className="header-styling">Edit Profile</h1>
                    {/* Username */}
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                id="username"
                                value={this.props.tempUser.username}
                                onChange={(event) => this.props.editUser({ ...this.props.tempUser, username: event.target.value })} />
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
                                value={this.props.tempUser.password}
                                onChange={(event) => this.props.editUser({ ...this.props.tempUser, password: event.target.value })} />
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-outline-secondary"
                                onClick={() => this.props.updateUser(this.props.tempUser)}>
                                Submit
                            </button>
                        </div>
                    </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    tempUser: state.userReducer.tempUser,
    user: state.userReducer.user
})

const propertyToDispatchMapper = (dispatch) => ({
    updateUser: (newUser) => updateUser(dispatch, newUser),
    editUser: (newUser) => editUser(dispatch, newUser),
    profile: () => profile(dispatch)

})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (EditProfile)
