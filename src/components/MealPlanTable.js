import React from "react";
import MealPlanRow from "./MealPlanRow";
import mealPlanService from "../services/MealPlanService";
import { act } from "react-dom/test-utils";
import {
    deleteMealPlan,
    updateMealPlan, 
    updateTitle, 
    changeDisplay
} from "../actions/mealPlanActions"
import { connect } from 'react-redux';

class MealPlanTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container content">
                <table id="courses" className="table table-hover"
                       cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th className="priority-1" scope="col"
                            width="45%">Title
                        </th>
                        <th className="priority-3" scope="col"
                            width="15%">Diet
                        </th>
                        <th className="priority-2" scope="col" width="25%">Time
                            Created
                        </th>
                        <th className="priority-1" scope="col" width="3%">
                            <div onClick={this.props.changeDisplay}>
                                <i className="fa fa-th-large"
                                   aria-hidden="true"/>
                            </div>
                        </th>
                        <th className="priority-1" scope="col" width="3%"><i
                            className="fa fa-sort-alpha-asc"
                            aria-hidden="true"/></th>
                        <th className="priority-1" scope="col" width="5%"/>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.mealPlans.map(mealPlan =>
                            <MealPlanRow
                                key={mealPlan.id}
                                mealPlan={mealPlan}/>
                        )
                    }
                    </tbody>
                </table>
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
    (MealPlanTable)

