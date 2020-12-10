import React from "react";
import { connect } from "react-redux";
import "./Meals.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteLesson,
    createLesson,
    updateLesson
} from "../actions/lessonActions"

const Meals = ({ lessons = [], dailyPlanId, mealPlan, deleteLesson, createLesson, updateLesson }) =>

<div className="meals-container">
<h3>Meals</h3>
<ul className="nav nav-tabs">
    {
        lessons.map(lesson =>
            <li className="nav-item" key={lesson._id}>
                <button type="button" className="btn btn-outline-danger inline " onClick={() => deleteLesson(lesson)}>
                    <i className="fa fa-trash"></i>
                </button>
                {lesson.editing &&
                    <span>
                        <button type="button" className="btn btn-outline-secondary inline" onClick={() =>
                            updateLesson({ ...lesson, editing: false })}>
                            Ok
                     </button>

                        <input
                        className="form-control"
                            onChange={(event) =>
                                updateLesson({ ...lesson, title: event.target.value })}
                            value={lesson.title} />
                    </span>}
                {
                    !lesson.editing &&
                    <label>
                        <button type="button" className="btn btn-outline-success inline" onClick={() => updateLesson({ ...lesson, editing: true })}>
                            <i className="fa fa-edit" />
                        </button>
                        <Link className="link" to={`/edit/${mealPlan._id}/dailyPlans/${dailyPlanId}/lessons/${lesson._id}`}>{lesson.title}</Link>
                    </label>}
            </li>)
    }
</ul>
<button type="button" className="btn btn-outline-secondary inline" onClick={() =>
    createLesson(dailyPlanId, { title: "New Meal" })}>Create Meal</button>
</div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    dailyPlanId: state.lessonReducer.dailyPlanId,
    mealPlan: state.mealPlanReducer.mealPlan
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (dailyPlanId, lesson) => createLesson(dispatch, dailyPlanId, lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (Meals)