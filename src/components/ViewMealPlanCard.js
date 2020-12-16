import React from "react";
import "../css/MealPlanCard.css"
import {Link} from "react-router-dom";

class ViewMealPlanCard extends React.Component {
  state = {
    mealPlan: this.props.mealPlan
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="card border-secondary">
          <div className="card-body card-styling">
            <Link to={`/edit/${this.props.mealPlan.id}`}><h4 className="card-title">{this.props.mealPlan.name}</h4></Link>
            <p className="card-text">{this.props.mealPlan.diet} diet</p>
            <p className="card-text">
              <small className="text-muted">
                Created: {this.props.mealPlan.time}
                <br/>
                Owner: {this.props.creator.username}
              </small></p>
          </div>
        </div>
    )
  }
}

export default ViewMealPlanCard
