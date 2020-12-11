import React from "react";
import mealPlanService from "../services/MealPlanService";
import MealPlanTable from "./MealPlanTable";
import { BrowserRouter, Link, Route } from "react-router-dom";


class MealPlanRow extends React.Component {
    state = {
        editing: false,
        mealPlan: this.props.mealPlan,
        color: ""
    }
    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const mealPlan = {
            ...this.state.mealPlan
        }
        mealPlan.title = newTitle
        this.setState({
            mealPlan: mealPlan
        })
        // this.props.updateTitle(course)
    }

    updateCourse = () => {
        this.setState({ editing: false })
        this.props.updateCourse(this.state.mealPlan._id, this.state.mealPlan)
    }

    changeColor = () => {
        this.setState({
            color: "aquamarine"
        })
    }

    render() {
        return (
            <tr className="course-row" style={{ backgroundColor: this.state.color }} onClick={this.changeColor}>
                <td className="priority-1">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.mealPlan._id}`}>
                            <i class="fa fa-file-text" aria-hidden="true"></i> {this.state.mealPlan.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.mealPlan.title} />
                    }
                </td>
                <td className="priority-3">{this.props.mealPlan.owner}</td>
                <td className="priority-2">{this.props.mealPlan.lastUpdated}</td>
                <td className="priority-2"></td>
                {
                    this.state.editing &&
                    <td className="priority-1">
                        <button onClick={this.updateCourse}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <i className="fa fa-pencil" onClick={() => this.setState({ editing: true })} aria-hidden="true"></i>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <i class="fa fa-trash" onClick={() => this.props.deleteCourse(this.props.mealPlan)} aria-hidden="true"></i>
                    </td>
                }
            </tr>
        )
    }
}


export default MealPlanRow