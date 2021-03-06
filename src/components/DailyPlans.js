import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  deleteDailyPlan,
  createDailyPlan,
  updateDailyPlan
} from "../actions/dailyPlanActions"
import "../css/DailyPlans.css";



const DailyPlans = (
  { mealPlan, dailyPlans = [],
  deleteDailyPlan, createDailyPlan, updateDailyPlan, canEdit}) => {
debugger
return  <div>
  <h3 className="daily-plans-header">Daily Plans</h3>
  <div className="modules">
  <ul className="list-group">
      {
          dailyPlans.map(dailyPlan =>
              <li className="list-group-item" key={dailyPlan.id}>
                  {
                      !canEdit &&
                  <div>
                  <button type="button" className="btn btn-outline-danger inline" onClick={() => deleteDailyPlan(dailyPlan)}>
                      <i className="fa fa-trash"></i>
                  </button>
                  {dailyPlan.editing &&
                      <span>
                          <button type="button" className="btn btn-outline-secondary inline" onClick={() =>
                              updateDailyPlan({ ...dailyPlan, editing: false })}>
                              Ok
                       </button>

                          <input
                          className="form-control"
                              onChange={(event) =>
                                  updateDailyPlan({ ...dailyPlan, name: event.target.value })}
                              value={dailyPlan.name} />

                      </span>}
                  {
                      !dailyPlan.editing &&
                      <div>
                          <button type="button" className="btn btn-outline-success inline" onClick={() => updateDailyPlan({ ...dailyPlan, editing: true })}>
                          <i className="fa fa-edit" />
                          </button>
                          <Link className="link" to={`/edit/${mealPlan.id}/dailyPlans/${dailyPlan.id}`}>{dailyPlan.name}</Link>
                      </div>}
                      </div>
                  }
                  {
                      canEdit &&
                      <Link className="link" to={`/edit/${mealPlan.id}/dailyPlans/${dailyPlan.id}`}>{dailyPlan.name}</Link>
                  }

              </li>

          )
      }
  </ul>
  <button type="button" className="btn btn-outline-secondary inline create" onClick={() => createDailyPlan(mealPlan, { name: "New Daily Plan" })}>
      Create Daily Plan
  </button>
</div>
</div>

    }
const stateToPropertyMapper = (state) => ({
  dailyPlans: state.dailyPlanReducer.dailyPlans,
  mealPlan: state.mealPlanReducer.mealPlan
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteDailyPlan: (dailyPlan) => deleteDailyPlan(dispatch, dailyPlan),
  createDailyPlan: (mealPlan, dailyPlan) => createDailyPlan(dispatch, mealPlan, dailyPlan),
  updateDailyPlan: (dailyPlan) => updateDailyPlan(dispatch, dailyPlan)
})

export default connect
  (stateToPropertyMapper,
  propertyToDispatchMapper)
  (DailyPlans)