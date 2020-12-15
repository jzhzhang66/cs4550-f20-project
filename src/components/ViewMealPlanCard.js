import React from "react";
import "../css/MealPlanCard.css"

class ViewMealPlanCard extends React.Component {
  state = {
    editing: false,
    mealPlan: this.props.mealPlan
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="card">
          <div className="card-body card-styling">
            <p className="card-text">Meal Plan Description. This meal plan is a
              great meal plan and has cool things.</p>
          </div>
        </div>
    )
  }
}

export default ViewMealPlanCard
