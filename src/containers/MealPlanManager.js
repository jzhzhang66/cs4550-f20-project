import React from "react";
import "./MealPlanManager.css"
import MealPlanRow from "../components/MealPlanRow";
import MealPlanTable from "../components/MealPlanTable";
import MealPlanGrid from "../components/MealPlanGrid";
import courseService from "../services/CourseService";
import { act } from "react-dom/test-utils";
import "../App.css";

class MealPlanManager extends React.Component {
    state = {
        courses: [],
        title: "",
        isTable: true
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
        console.log(this.state.courses)
    }

    createCourse = () => {
        const newCourse = {
            title: this.state.title,
            owner: 'me',
            lastUpdated: 'today'
        }
        console.log(newCourse)

        courseService.createCourse(newCourse).then(actualCourse =>
            this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ],
                title: ""
            })))
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id).then(status =>
            this.setState(prevState => ({
                courses: prevState.courses.filter(c => c._id !== course._id)
            }))
        )
    }

    updateTitle = (course, number) => {
        console.log(course)
        const newCourses = {
            ...this.state.courses
        }
        console.log(newCourses)
        newCourses[number] = course
        this.setState({
            courses: 
                newCourses
        })
    }

    updateCourse = (courseId, course) => {
        courseService.updateCourse(courseId, course)
        .then(status => {
        this.setState(prevState => ({
            courses: prevState.courses.map(c => c._id === courseId?course: c)
        }))
    })
    }

    enterTitle = (event) => {
        const newTitle = event.target.value
        this.setState({
            title: newTitle
        })
    }

    changeDisplay = () => {
        this.setState(prevState => ({
            isTable: !prevState.isTable
        }))
    }

    render() {
        return (
            <div>
                {/* navbar */}
                <nav class="navbar sticky-top navbar-dark manager-nav-bar">
                    <a class="navbar-brand "> <i class="fa fa-bars" aria-hidden="true"></i>  Meal Plan Manager</a>
                    <div class="input-group mb-3">
                        <input type="text" value={this.state.title} onChange={this.enterTitle} class="form-control" placeholder="New Course Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-success" onClick={this.createCourse} type="button"><i className="fa fa-plus-circle"
                            aria-hidden="true"></i></button>
                        </div>
                    </div>
                </nav>
                {
                    this.state.isTable &&
                    <MealPlanTable
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse} 
                    changeDisplay={this.changeDisplay}
                    updateTitle={this.updateTitle}/>
                }
                {
                    !this.state.isTable &&
                    <MealPlanGrid
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse} 
                    changeDisplay={this.changeDisplay}
                    updateTitle={this.updateTitle}/>
                }

            </div>
        )
    }
}


export default MealPlanManager