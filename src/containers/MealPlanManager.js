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
    // state = {
    //     mealPlans: [],
    //     user: []
    // }
    constructor(props) {
        super(props)
        this.props.findMealPlansByCreator(this.props.creatorId).then()
    }

    componentDidMount() {
        // this.props.profile().then(user => this.setState({user: user}))
    }

    render() {
        return (
            <div>
                {/* navbar */}
                <nav className="navbar sticky-top navbar-dark manager-nav-bar">
                    <a className="navbar-brand "> <i className="fa fa-bars" aria-hidden="true"/>  Meal Plan Manager</a>
                    <div className="input-group mb-3">
                        <input type="text" value={this.props.title} onChange={(event) => this.props.enterTitle(event.target.value)} class="form-control" placeholder="New Meal Plan Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" onClick={() => this.props.createMealPlan(this.props.creatorId, {
                                name: this.props.title,
                                diet: 'vegan',
                                time: new Date()
                            })} type="button"><i className="fa fa-plus-circle"
                                aria-hidden="true"/></button>
                        </div>
                    </div>
                </nav>
                {
                    this.props.isTable &&
                    <MealPlanTable />
                } 
                {
                    !this.props.isTable &&
                    <MealPlanGrid />
                }

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
        title: state.mealPlanReducer.title,
        isTable: state.mealPlanReducer.isTable
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
