import React from 'react';
import { connect } from "react-redux";
import { getAllUsers } from "../services/UserService";
import UserRow from "./UserRow";
import {Link} from "react-router-dom";
import { profile } from "../actions/userActions";
import { addFollowing, getCreators } from '../actions/profileActions';

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            canAdd: false
        }
    }

    componentDidMount() {
        debugger
        this.props.profile().then(() => {
            debugger
            if (this.props.user.id === undefined || this.props.user.id === "") {
                this.setState({ ...this.state, canAdd: false })
            } else if (this.props.user.userType === "creator") {
                this.setState({ ...this.state, canAdd: false })
            } else {
                this.props.getCreators(this.props.user.id)
                this.setState({ ...this.state, canAdd: true })
            }
        })
        getAllUsers().then(users => this.setState({ ...this.state, users: users }))
    }

    isAlreadyAdded = (userId) => {
        this.props.following.forEach(f => {
            if(f.id === userId) {
                return true;
            }
        });
        return false;
    }



    render() {
        return (
            <div className="container">
                <h1>User List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Type</th>
                            <th>Add Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user =>
                                <tr>
                                    <td>
                                        <Link to={`/profile/${user.id}`}>
                                            {user.username}
                                        </Link>
                                    </td>
                                    <td>
                                        {user.userType}
                                    </td>
                                    <td>
                                        {
                                            this.state.canAdd && user.userType === "creator" &&
                                            (() => this.isAlreadyAdded(user.id)) &&
                                            <button type="button" 
                                            className="btn btn-outline-secondary inline create"
                                            onClick={() => this.props.addFollowing({ followerId: this.props.user.id, creatorId: user.id, time: new Date() }, user)}>
                                                +
                                            </button>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.userReducer.user,
    following: state.profileReducer.following
})

const propertyToDispatchMapper = (dispatch) => ({
    profile: () => profile(dispatch),
    addFollowing: (following, creator) => addFollowing(dispatch, following, creator),
    getCreators: (userId) => getCreators(dispatch, userId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (UserList)

