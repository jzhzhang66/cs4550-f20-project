import React from "react";
import mealPlanService from "../services/MealPlanService";
import MealPlanTable from "./MealPlanTable";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteMealPlan,
    updateMealPlan, 
    updateTitle, 
    changeDisplay
} from "../actions/mealPlanActions"
import { connect } from 'react-redux';

class MealPlanRow extends React.Component {
    state = {
        editing: false,
        mealPlan: this.props.mealPlan
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr className="course-row" style={{ backgroundColor: this.state.color }} onClick={this.changeColor}>
                <td className="priority-1">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.mealPlan.id}`}>
                            <i class="fa fa-file-text" aria-hidden="true"></i> {this.state.mealPlan.name}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={(event) => this.props.updateTitle(event.target.value)}
                            value={this.state.mealPlan.name} />
                    }
                </td>
                <td className="priority-3">{this.props.mealPlan.diet}</td>
                <td className="priority-2">{this.props.mealPlan.time}</td>
                <td className="priority-2"></td>
                {
                    this.state.editing &&
                    <td className="priority-1">
                        <button onClick={() => this.props.updateMealPlan(this.mealPlan)}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <i className="fa fa-pencil" onClick={() => this.setState({ editing: true })} aria-hidden="true"></i>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <i class="fa fa-trash" onClick={() => this.props.deleteMealPlan(this.props.mealPlan)} aria-hidden="true"></i>
                    </td>
                }
            </tr>
        )
    }
}

const stateToPropertyMapper = (state) => {
    console.log(state)
    debugger
    return ({
        creatorId: state.userReducer.user.id,
        mealPlans: state.mealPlanReducer.mealPlans
    })
}

const propertyToDispatchMapper = (dispatch) => ({
    deleteMealPlan: (mealPlan) => deleteMealPlan(dispatch, mealPlan),
    updateMealPlan: (mealPlanId, newMealPlan) => updateMealPlan(dispatch, mealPlanId, newMealPlan),
    updateTitle: (newTitle) => updateTitle(dispatch, newTitle),
    changeDisplay: () => changeDisplay(dispatch)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanRow)

