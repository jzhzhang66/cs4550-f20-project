import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  deleteTopic,
  createTopic,
  updateTopic
} from "../actions/topicActions"

import "./RecipesAndIngredients.css";


const RecipesAndIngredients = (
  { mealPlan, dailyPlanId, lessonId, topics = [],
    deleteTopic, createTopic, updateTopic }) =>
    <div className="row recipes-ingredients">
      <div className="col-5">
      <h3>Recipes</h3>
      </div>
      <div className="col-4">
      <h3>Ingredients</h3>
      </div>
    </div>

const stateToPropertyMapper = (state) => ({
  topics: state.topicReducer.topics,
  lessonId: state.topicReducer.lessonId,
  dailyPlanId: state.mealReducer.dailyPlanId,
  mealPlan: state.mealPlanReducer.mealPlan
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteTopic: (topic) => deleteTopic(dispatch, topic),
  createTopic: (lessonId, topic) => createTopic(dispatch, lessonId, topic),
  updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect
  (stateToPropertyMapper,
    propertyToDispatchMapper)
  (RecipesAndIngredients)