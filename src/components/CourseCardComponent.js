import React from "react";
import courseService from "../services/CourseService";
import CourseTableContainer from "./CourseTableComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./CourseCardComponent.css"


class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }
    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = {
            ...this.state.course
        }
        course.title = newTitle
        this.setState({
            course: course
        })
        // this.props.updateTitle(course)
    }

    updateCourse = () => {
        this.setState({ editing: false })
        this.props.updateCourse(this.state.course._id, this.state.course)
    }
    render() {
        return (
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card-body card-styling">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.course._id}`}>
                            <h5 class="card-title">{this.state.course.title}</h5>
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.course.title} 
                            className="form-control"/>
                    }
                    <p class="card-text">Course Description. This Course is a great course and has cool things.</p>
                    <p class="card-text"><small class="text-muted">Last Updated: {this.props.course.lastUpdated}<br/>
                    Owner: {this.props.course.owner}</small></p>
                </div>
                <div class="card-footer">
                    {
                        this.state.editing &&
                        <td className="priority-1">
                            <button onClick={this.updateCourse} className="btn btn-outline-secondary">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                    {
                        !this.state.editing &&
                        <td className="priority-1">
                            <button onClick={() => this.setState({ editing: true })} className="btn btn-outline-secondary">
                                <i className="fa fa-edit" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                    {
                        !this.state.editing &&
                        <td className="priority-1">
                            <button onClick={() => this.props.deleteCourse(this.props.course)} className="btn btn-outline-secondary">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                </div>
            </div>
        )
    }
}


export default CourseCardComponent