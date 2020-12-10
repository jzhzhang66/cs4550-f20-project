import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  deleteModule,
  createModule,
  updateModule
} from "../actions/moduleActions"
import "./DailyPlans.css";

const DailyPlans = (
  { course, modules = [],
  deleteModule, createModule, updateModule}) =>
  <div>
  <h3 className="daily-plans-header">Daily Plans</h3>
  <div className="modules">
  <ul className="list-group">
      {
          modules.map(module => 
              <li className="list-group-item" key={module._id}>
                  <button type="button" className="btn btn-outline-danger inline" onClick={() => deleteModule(module)}>
                      <i className="fa fa-trash"></i>
                  </button>
                  {module.editing &&
                      <span>
                          <button type="button" className="btn btn-outline-secondary inline" onClick={() =>
                              updateModule({ ...module, editing: false })}>
                              Ok
                       </button>

                          <input
                          className="form-control"
                              onChange={(event) =>
                                  updateModule({ ...module, title: event.target.value })}
                              value={module.title} />

                      </span>}
                  {
                      !module.editing &&
                      <label>
                          <button type="button" className="btn btn-outline-success inline" onClick={() => updateModule({ ...module, editing: true })}>
                          <i className="fa fa-edit" />
                          </button>
                          <Link className="link" to={`/edit/${course._id}/modules/${module._id}`}>{module.title}</Link>
                      </label>}

              </li>

          )
      }
  </ul>
  <button type="button" className="btn btn-outline-secondary inline create" onClick={() => createModule(course, { title: "New Module" })}>
      Create Daily Plan
  </button>
</div>
</div>


const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: (course, module) => createModule(dispatch, course, module),
  updateModule: (module) => updateModule(dispatch, module)
})

export default connect
  (stateToPropertyMapper,
  propertyToDispatchMapper)
  (DailyPlans)