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

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            mealPlan: this.props.mealPlan
        }
    }

    render() {
        return (
            <tr className="course-row" style={{ backgroundColor: this.state.color }} onClick={this.changeColor}>
                <td className="priority-1">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.mealPlan.id}`}>
                            {this.state.mealPlan.name}
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
                <td className="priority-1">
                {
                    this.state.editing &&
                        <button className="btn" onClick={() => this.props.updateMealPlan(this.state.mealPlan)}>
                            <i className="fa fa-check" aria-hidden="true"/>
                        </button>
                }
                {
                    !this.state.editing &&
                    <button className="btn">
                        <i className="fa fa-pen" onClick={() => this.setState({ editing: true })} aria-hidden="true"/>
                    </button>
                }
                {
                    !this.state.editing &&
                    <button className="btn">
                        <i class="fa fa-trash" onClick={() => this.props.deleteMealPlan(this.state.mealPlan)} aria-hidden="true"/>
                    </button>
                }
                </td>
            </tr>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    creatorId: state.userReducer.user.id,
    mealPlans: state.mealPlanReducer.mealPlans
    // console.log(state)
    // debugger
    // return ({
    //     creatorId: state.userReducer.user.id,
    //     mealPlans: state.mealPlanReducer.mealPlans
    // })
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteMealPlan: (mealPlan) => deleteMealPlan(dispatch, mealPlan),
    updateMealPlan: (mealPlan) => updateMealPlan(dispatch, mealPlan),
    updateTitle: (newTitle) => updateTitle(dispatch, newTitle),
    changeDisplay: () => changeDisplay(dispatch)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanRow)

