import React from "react";
import "../css/MealPlanManager.css"
import MealPlanRow from "../components/MealPlanRow";
import MealPlanTable from "../components/MealPlanTable";
import MealPlanGrid from "../components/MealPlanGrid";
import mealPlanService from "../services/MealPlanService";
import { act } from "react-dom/test-utils";
import "../App.css";

class MealPlanManager extends React.Component {
    state = {
        mealPlans: [],
        title: "",
        isTable: true
    }

    componentDidMount() {
        mealPlanService.findAllMealPlans()
            .then(mealPlans => this.setState({
                mealPlans: mealPlans
            }))
        console.log(this.state.mealPlans)
        debugger
    }

    createMealPlan = () => {
        const newMealPlan = {
            title: this.state.title,
            owner: 'me',
            lastUpdated: 'today'
        }
        console.log(newMealPlan)

        mealPlanService.createMealPlan(newMealPlan).then(actualMealPlan =>
            this.setState(prevState => ({
                mealPlans: [
                    ...prevState.mealPlans, actualMealPlan
                ],
                title: ""
            })))
    }

    deleteMealPlan = (mealPlan) => {
        mealPlanService.deleteMealPlan(mealPlan._id).then(status =>
            this.setState(prevState => ({
                mealPlans: prevState.mealPlans.filter(c => c._id !== mealPlan._id)
            }))
        )
    }

    updateTitle = (mealPlan, number) => {
        console.log(mealPlan)
        const newMealPlans = {
            ...this.state.mealPlans
        }
        console.log(newMealPlans)
        newMealPlans[number] = mealPlan
        this.setState({
            mealPlans:
                newMealPlans
        })
    }

    updateMealPlan = (mealPlanId, mealPlan) => {
        mealPlanService.updateMealPlan(mealPlanId, mealPlan)
        .then(status => {
        this.setState(prevState => ({
            mealPlans: prevState.mealPlans.map(c => c._id === mealPlanId?mealPlan: c)
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
                            <button class="btn btn-outline-success" onClick={this.createMealPlan} type="button"><i className="fa fa-plus-circle"
                            aria-hidden="true"></i></button>
                        </div>
                    </div>
                </nav>
                {
                    this.state.isTable &&
                    <MealPlanTable
                    mealPlans={this.state.mealPlans}
                    deleteMealPlan={this.deleteMealPlan}
                    updateMealPlan={this.updateMealPlan}
                    changeDisplay={this.changeDisplay}
                    updateTitle={this.updateTitle}/>
                }
                {
                    !this.state.isTable &&
                    <MealPlanGrid
                    mealPlans={this.state.mealPlans}
                    deleteMealPlan={this.deleteMealPlan}
                    updateMealPlan={this.updateMealPlan}
                    changeDisplay={this.changeDisplay}
                    updateTitle={this.updateTitle}/>
                }

            </div>
        )
    }
}


export default MealPlanManager