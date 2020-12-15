import React from "react";
import "../css/MealPlanCard.css"
import {Link} from "react-router-dom";

class ViewUserCard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="card">
          <div className="card-body card-styling">
            <Link to={`/profile/${this.props.user.id}`}><h4 className="card-title">{this.props.user.username}</h4></Link>
          </div>
        </div>
    )
  }
}

export default ViewUserCard
