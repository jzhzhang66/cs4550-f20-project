import { buildQueries } from "@testing-library/react";
import "../css/MealPlanEditor.css";
import React from "react";
import { connect } from "react-redux";
import MealPlanService from "../services/MealPlanService";
import DailyPlanService from "../services/DailyPlanService";
import Meals from "../components/Meals";
import DailyPlans from "../components/DailyPlans";
import RecipesAndIngredients from "../components/RecipesAndIngredients";
import { findDailyPlansForMealPlan} from "../actions/dailyPlanActions";
import { findDailyPlan } from "../actions/dailyPlanActions";
import { findMealPlanById, findMealPlansByCreator } from "../actions/mealPlanActions";
import { findMealsForDailyPlan } from "../actions/mealActions";
import { findMeal } from "../actions/mealActions"
import { findRecipesForMeal, findIngredientsForMeal } from "../actions/recipeAndIngredientActions"
import { profile } from "../actions/userActions";

import "../App.css";

class MealPlanEditor extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.profile().then(() => {
            this.props.findMealPlansByCreator(this.props.user.id)
            }
        )
        const mealPlanId = this.props.match.params.mealPlanId
        debugger
        const dailyPlanId = this.props.match.params.dailyPlanId
        const mealId = this.props.match.params.mealId
        this.props.findMealPlanById(mealPlanId)
        this.props.findDailyPlansForMealPlan(mealPlanId)
        if (dailyPlanId) {
            this.props.findDailyPlan(dailyPlanId)
            this.props.findMealsForDailyPlan(dailyPlanId)
        }
        if (mealId) {
            this.props.findRecipesForMeal(mealId)
            this.props.findIngredientsForMeal(mealId)
        }
    }

    canEdit = (mealPlanId) => {
        debugger
        return this.props.mealPlans.some(mp => 
            mp.id === mealPlanId)
    }
    
    

    componentDidUpdate(prevProps, prevState, snapshot) {
        const dailyPlanId = this.props.match.params.dailyPlanId
        const previousDailyPlanId = prevProps.match.params.dailyPlanId
        debugger
        if (dailyPlanId !== previousDailyPlanId) {
            // this.props.findDailyPlan(dailyPlanId)
            debugger
            this.props.findMealsForDailyPlan(dailyPlanId)
        }
        const mealId = this.props.match.params.mealId
        const previousMealId = prevProps.match.params.mealId
        if (mealId !== previousMealId) {
           this.props.findRecipesForMeal(mealId)
           this.props.findIngredientsForMeal(mealId)
        }
    }

    render() {
        return (
            <div className="fixed">
                <h2>
                <a className="editor-header" href="#">Meal Plan Editor</a>
                </h2>
                <div className="row">
                    <div className="col-4">
                    <DailyPlans canEdit={this.canEdit(this.props.match.params.mealPlanId)}/>
                    </div>
                    <div className="col-8">
                        <Meals />
                        <RecipesAndIngredients />
                    </div>
                </div>
            </div>
        )
}
}

const stateToPropertyMapper = (state) => {
    debugger
    return({
        user: state.userReducer.user,
        mealPlans: state.mealPlanReducer.mealPlans
    })
}


const propertyToDispatchMapper = (dispatch) => ({
    findDailyPlansForMealPlan: (mealPlanId) => findDailyPlansForMealPlan(dispatch, mealPlanId),
    findMealPlanById: (mealPlanId) => findMealPlanById(dispatch, mealPlanId),
    findDailyPlan: (dailyPlanId) => findDailyPlan(dispatch, dailyPlanId),
    findMealsForDailyPlan: (dailyPlanId) => findMealsForDailyPlan(dispatch, dailyPlanId),
    findMeal: (mealId) => findMeal(dispatch, mealId),
    findRecipesForMeal: (mealId) => findRecipesForMeal(dispatch, mealId),
    findIngredientsForMeal: (mealId) => findIngredientsForMeal(dispatch, mealId),
    findMealPlansByCreator: (creatorId) => findMealPlansByCreator(dispatch, creatorId),
    profile: () => profile(dispatch)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanEditor)
