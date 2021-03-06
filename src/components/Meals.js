import React from "react";
import { connect } from "react-redux";
import "../css/Meals.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteMeal,
    createMeal,
    updateMeal
} from "../actions/mealActions"

const Meals = ({ meals = [], dailyPlanId, mealPlan, deleteMeal, createMeal, updateMeal }) =>

<div className="meals-container">
<h3>Meals</h3>
<ul className="nav nav-tabs">
    {
        meals.map(meal =>
            <li className="nav-item" key={meal._id}>
                <button type="button" className="btn btn-outline-danger inline " onClick={() => deleteMeal(meal)}>
                    <i className="fa fa-trash"></i>
                </button>
                {meal.editing &&
                    <span>
                        <button type="button" className="btn btn-outline-secondary inline" onClick={() =>
                            updateMeal({ ...meal, editing: false })}>
                            Ok
                     </button>

                        <input
                        className="form-control"
                            onChange={(event) =>
                                updateMeal({ ...meal, name: event.target.value })}
                            value={meal.name} />
                    </span>}
                {
                    !meal.editing &&
                    <label>
                        <button type="button" className="btn btn-outline-success inline" onClick={() => updateMeal({ ...meal, editing: true })}>
                            <i className="fa fa-edit" />
                        </button>
                        <Link className="link" to={`/edit/${mealPlan.id}/dailyPlans/${dailyPlanId}/meals/${meal.id}/recipesAndIngredients`}>{meal.name}</Link>
                    </label>}
            </li>)
    }
</ul>
<button type="button" className="btn btn-outline-secondary inline" onClick={() =>
    createMeal(dailyPlanId, { name: "New Meal" })}>Create Meal</button>
</div>

const stateToPropertyMapper = (state) => {
    debugger
    return ({
        meals: state.mealReducer.meals,
        dailyPlanId: state.mealReducer.dailyPlanId,
        mealPlan: state.mealPlanReducer.mealPlan
    })
}



const propertyToDispatchMapper = (dispatch) => ({
    deleteMeal: (meal) => deleteMeal(dispatch, meal),
    createMeal: (dailyPlanId, meal) => createMeal(dispatch, dailyPlanId, meal),
    updateMeal: (meal) => updateMeal(dispatch, meal)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (Meals)