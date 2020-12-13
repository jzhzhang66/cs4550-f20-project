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
import { findMealPlanById } from "../actions/mealPlanActions";
import { findMealsForDailyPlan } from "../actions/mealActions";
import { findMeal } from "../actions/mealActions"

import "../App.css";


class MealPlanEditor extends React.Component {
    componentDidMount() {
        console.log(this.props)
        const mealPlanId = this.props.match.params.mealPlanId
        debugger
        const dailyPlanId = this.props.match.params.dailyPlanId
        const mealId = this.props.match.params.mealId
        const topicId = this.props.match.params.topicId
        this.props.findMealPlanById(mealPlanId)
        this.props.findDailyPlansForMealPlan(mealPlanId)
        if (dailyPlanId) {
            this.props.findDailyPlan(dailyPlanId)
            this.props.findMealsForDailyPlan(dailyPlanId)
        }
        if (mealId) {
            this.props.findMeal(mealId)
            //this.props.findTopicsForLesson(mealId)
        }
        if (topicId) {
          //  this.props.findTopicById(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const dailyPlanId = this.props.match.params.dailyPlanId
        const previousDailyPlanId = prevProps.match.params.dailyPlanId
        if (dailyPlanId !== previousDailyPlanId) {
            this.props.findMealsForDailyPlan(dailyPlanId)
        }
        const mealId = this.props.match.params.mealId
        const previousMealId = prevProps.match.params.mealId
        if (mealId !== previousMealId) {
           // this.props.findTopicsForLesson(mealId)
        }
        //const topicId = this.props.match.params.topicId
       // console.log(topicId);
       // const previousTopicId = prevProps.match.params.topicId
       // if (topicId !== previousTopicId) {
          //  this.props.findWidgetsForTopic(topicId)
        //}
    }

    render() {
        return (
            <div className="fixed">
                <h2>
                <a className="editor-header" href="#">Meal Plan Editor</a>
                </h2>
                <div className="row">
                    <div className="col-4">
                    <DailyPlans />
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

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
    findDailyPlansForMealPlan: (mealPlanId) => findDailyPlansForMealPlan(dispatch, mealPlanId),
    findMealPlanById: (mealPlanId) => findMealPlanById(dispatch, mealPlanId),
    findDailyPlan: (dailyPlanId) => findDailyPlan(dispatch, dailyPlanId),
    findMealsForDailyPlan: (dailyPlanId) => findMealsForDailyPlan(dispatch, dailyPlanId),
    findMeal: (mealId) => findMeal(dispatch, mealId),
   // findTopicsForLesson: (mealId) => findTopicsForLesson(dispatch, mealId),
    //findTopicById: (topicId) => findTopic(dispatch, topicId),
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanEditor)
