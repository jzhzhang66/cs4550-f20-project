import React from "react";
import MealPlanService from "../services/MealPlanService";
import MeanPlanTable from "./MealPlanTable";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "../css/MealPlanCard.css"
import {
    deleteMealPlan,
    updateMealPlan, 
    updateTitle, 
    changeDisplay
} from "../actions/mealPlanActions"
import { connect } from 'react-redux';

class MealPlanCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            mealPlan: this.props.mealPlan
        }
    }

    render() {
        return (
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card-body card-styling">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.mealPlan._id}`}>
                            <h5 class="card-title">{this.state.mealPlan.name}</h5>
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                        onChange={(event) => this.props.updateTitle(event.target.value)}
                        value={this.state.mealPlan.name}
                            className="form-control"/>
                    }
                    <p class="card-text">Meal Plan Description. This meal plan is a great meal plan and has cool things.</p>
                    <p class="card-text"><small class="text-muted">Diet: {this.props.mealPlan.diet}<br/>
                    Time Created: {this.props.mealPlan.time}</small></p>
                </div>
                <div class="card-footer">
                    {
                        this.state.editing &&
                        <td className="priority-1">
                            <button onClick={() => this.props.updateMealPlan(this.state.mealPLan)} className="btn btn-outline-secondary">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                    {
                        !this.state.editing &&
                        <td className="priority-1">
                            <button onClick={() => this.setState({ editing: true })} className="btn btn-outline-secondary">
                                <i className="fa fa-edit" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                    {
                        !this.state.editing &&
                        <td className="priority-1">
                            <button onClick={() => this.props.deleteMealPlan(this.state.mealPlan)} className="btn btn-outline-secondary">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                </div>
            </div>
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
    (MealPlanCard)
