import React from "react";
import "../css/MealPlanManager.css"
import MealPlanRow from "../components/MealPlanRow";
import MealPlanTable from "../components/MealPlanTable";
import MealPlanGrid from "../components/MealPlanGrid";
import { findMealPlansByCreator, createMealPlan, enterTitle } from "../actions/mealPlanActions";
import { connect } from 'react-redux';
import { act } from "react-dom/test-utils";
import "../App.css";
import userReducer from "../reducers/userReducer";
import UserService from "../services/UserService";
import {
    profile
} from '../actions/userActions';

class MealPlanManager extends React.Component {

    componentDidMount() {
        debugger
        this.props.profile()
        this.props.findMealPlansByCreator(this.props.creatorId)
        debugger
    }

    render() {
        return (
            <div>
                {/* navbar */}
                <nav class="navbar sticky-top navbar-dark manager-nav-bar">
                    <a class="navbar-brand "> <i class="fa fa-bars" aria-hidden="true"></i>  Meal Plan Manager</a>
                    <div class="input-group mb-3">
                        <input type="text" value={this.props.title} onChange={(event) => this.props.enterTitle(event.target.value)} class="form-control" placeholder="New Meal Plan Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-success" onClick={() => this.props.createMealPlan(this.props.creatorId, {
                                name: this.props.title,
                                diet: 'vegan',
                                time: new Date()
                            })} type="button"><i className="fa fa-plus-circle"
                                aria-hidden="true"></i></button>
                        </div>
                    </div>
                </nav>
                <MealPlanTable />
                {/* {
                    this.props.isTable &&
                    <MealPlanTable />
                } */}
                {/* {
                    !this.props.isTable &&
                    <MealPlanGrid
                        mealPlans={this.state.mealPlans}
                        deleteMealPlan={this.deleteMealPlan}
                        updateMealPlan={this.updateMealPlan}
                        changeDisplay={this.changeDisplay}
                        updateTitle={this.updateTitle} />
                } */}

            </div>
        )
    }
}


const stateToPropertyMapper = (state) => {
    console.log(state)
    debugger
    return ({
        creatorId: state.userReducer.user.id,
        mealPlans: state.mealPlanReducer.mealPlans,
        title: state.mealPlanReducer.title
    })
}

const propertyToDispatchMapper = (dispatch) => {
    debugger
    return ({
        profile: () => profile(dispatch),
        findMealPlansByCreator: (creatorId) => findMealPlansByCreator(dispatch, creatorId),
        createMealPlan: (creatorId, newMealPlan) => createMealPlan(dispatch, creatorId, newMealPlan),
        enterTitle: (newTitle) => enterTitle(dispatch, newTitle)
    })
}

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanManager)