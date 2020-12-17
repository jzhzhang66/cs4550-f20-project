import React from "react";
import mealPlanService from "../services/MealPlanService";
import MealPlanTable from "./MealPlanTable";
import MealPlanCard from "./MealPlanCard"
import "../css/MealPlanGrid.css"
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteMealPlan,
    updateMealPlan, 
    updateTitle, 
    changeDisplay
} from "../actions/mealPlanActions"
import { connect } from 'react-redux';

class MealPlanGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <div class="card-columns card-deck">
            <div className="container content">
                <table id="courses" className="table table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th className="priority-2" scope="col" width="40%"></th>
                            <th className="priority-1" scope="col" width="3%">
                                <div onClick={this.props.changeDisplay}>
                                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th className="priority-1" scope="col" width="3%"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i></th>
                        </tr>
                    </thead>
                </table>
                {/* 
                <div class="card-columns"> */}
                <div className="row">
                    {
                        this.props.mealPlans.map(mealPlan =>
                            <MealPlanCard
                                key={mealPlan._id}
                                mealPlan={mealPlan} />
                        )
                    }
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    // console.log(state)
    // debugger
    // return ({
    //     creatorId: state.userReducer.user.id,
    //     mealPlans: state.mealPlanReducer.mealPlans
    // })
    creatorId: state.userReducer.user.id,
    mealPlans: state.mealPlanReducer.mealPlans
})

const propertyToDispatchMapper = (dispatch) => ({
    changeDisplay: () => changeDisplay(dispatch)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanGrid)

