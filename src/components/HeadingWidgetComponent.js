import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import WidgetHelperComponent from "./WidgetHelperComponent"
import {
    deleteWidget,
    createWidget,
    updateWidget,
    saveWidget
} from "../actions/widgetActions"


const HeadingWidgetComponent = (
    { course, moduleId, lessonId, topicId, widgets = [], passedWidget,
        deleteWidget, createWidget, updateWidget, saveWidget, isPreview }) =>

    <div class="container">
        <h4>
            Heading widget
        </h4>

        <WidgetHelperComponent passedWidget={passedWidget}/>
        {
            console.log(isPreview)
        }

        <br />
        <br/>


        <form>
            <div class="form-group row">
                <div class="col-sm">
                    <input class="form-control" value={passedWidget.value} id="heading" placeholder="Heading text" onChange={(event) => updateWidget({ ...passedWidget, value: event.target.value })} />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm">
                    <select class="form-control" value={passedWidget.style} onChange={(event) => updateWidget({ ...passedWidget, style: event.target.value })}>
                        <option value="Heading 1">Heading 1</option>
                        <option value="Heading 2">Heading 2</option>
                        <option value="Heading 3">Heading 3</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm">
                    <input type="text" class="form-control" value={passedWidget.name}
                        placeholder="Widget name" onChange={(event) => updateWidget({ ...passedWidget, name: event.target.value })} />
                </div>
            </div>

        </form>

        <h3>
            Preview
        </h3>
        {
            passedWidget.style === "Heading 1" &&
            <h1>
                {passedWidget.value}
            </h1>
        }
        {
            passedWidget.style === "Heading 2" &&
            <h2>
                {passedWidget.value}
            </h2>
        }
        {
            passedWidget.style === "Heading 3" &&
            <h3>
                {passedWidget.value}
            </h3>
        }

    </div>

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: (topicId, widget) => createWidget(dispatch, topicId, widget),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    saveWidget: (widget) => saveWidget(dispatch, widget)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (HeadingWidgetComponent)