import React from 'react';
import {connect} from "react-redux";
import {getAllUsers} from "../services/UserService";
import UserRow from "./UserRow";

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getAllUsers().then(users => this.setState({users: users}))
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
            </tr>
            </thead>
            <tbody>
            {this.state.users.map(user =>
                <UserRow
                    key={user.id}
                    user={user}/>)}
            </tbody>
          </table>
        </div>

    )
  }
}

const stateToPropertyMapper = (state) => ({})

const propertyToDispatchMapper = (dispatch) => ({})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(UserList)

