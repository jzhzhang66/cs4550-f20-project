import React from "react";
import {Link} from "react-router-dom";

class UserRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <tr>
          <td>
            <Link to={`/profile/${this.props.user.id}`}>
            {this.props.user.username}
            </Link>
          </td>
          <td>
            {this.props.user.userType}
          </td>
        </tr>
    )
  }
}

export default UserRow
