import React from "react";
import MealPlanService from "../services/MealPlanService";
import MeanPlanTable from "./MealPlanTable";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "../css/MealPlanCard.css"


class MealPlanCard extends React.Component {
    state = {
        editing: false,
        mealPlan: this.props.mealPlan
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
    render() {
        return (
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card-body card-styling">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.mealPlan._id}`}>
                            <h5 class="card-title">{this.state.mealPlan.title}</h5>
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.mealPlan.title}
                            className="form-control"/>
                    }
                    <p class="card-text">Meal Plan Description. This meal plan is a great meal plan and has cool things.</p>
                    <p class="card-text"><small class="text-muted">Last Updated: {this.props.mealPlan.lastUpdated}<br/>
                    Owner: {this.props.mealPlan.owner}</small></p>
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
                            <button onClick={() => this.props.deleteCourse(this.props.mealPlan)} className="btn btn-outline-secondary">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </td>
                    }
                </div>
            </div>
        )
    }
}


export default MealPlanCard