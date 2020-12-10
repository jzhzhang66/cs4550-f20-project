import React from "react";
import { connect } from "react-redux";
import "./Meals.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteLesson,
    createLesson,
    updateLesson
} from "../actions/lessonActions"

const Meals = ({ lessons = [], moduleId, course, deleteLesson, createLesson, updateLesson }) =>

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
                        <Link className="link" to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>{lesson.title}</Link>
                    </label>}
            </li>)
    }
</ul>
<button type="button" className="btn btn-outline-secondary inline" onClick={() =>
    createLesson(moduleId, { title: "New Meal" })}>Create Meal</button>
</div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (moduleId, lesson) => createLesson(dispatch, moduleId, lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (Meals)