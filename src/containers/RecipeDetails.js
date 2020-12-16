import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/RecipeDetails.css';
import IngredientsComponent from "../components/Ingredients";
import InstructionsComponent from "../components/Instructions";
import {
    findRecipeInfoById,
    findRecipeInstructionsById
} from "../actions/recipeActions"
import {
    addRecipeForMeal
} from "../actions/recipeAndIngredientActions"

// put the router in here
class RecipeDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        this.props.findRecipeInfoById(recipeId)
        this.props.findRecipeInstructionsById(recipeId)
        console.log("updated")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.recipeId !== this.props.match.params.recipeId) {
            const recipeId = this.props.match.params.recipeId
            this.props.findRecipeInfoById(recipeId)
            debugger
            this.props.findRecipeInstructionsById(recipeId)
        }
    }


    render() {
        return (
            <div className="container">
                <h1 className="title-header">{this.props.recipe.title}</h1>
                <img className="recipe-image" src={this.props.recipe.image} alt="" />
                <div className="recipe-info">
                    <h3>Serving Size: {this.props.recipe.servings}</h3>
                    <h3>Estimated Time: {this.props.recipe.readyInMinutes} minutes</h3>
                    <h3>Health Score: {this.props.recipe.healthScore} </h3>
                </div>
                {this.props.match.params.mealId && 
                                <Link to={`/edit/${this.props.match.params.mealPlanId}/dailyPlans/${this.props.match.params.dailyPlanId}/meals/${this.props.match.params.mealId}/recipesAndIngredients`}>
                                <button className="btn btn-outline-secondary add-ingredient"
                                    onClick={() => this.props.addRecipeForMeal(this.props.match.params.mealId, this.props.recipe)}>Add</button>
                            </Link>
                }

                <div className="row">
                    <div className="col-3">
                        <IngredientsComponent />
                    </div>
                    <div className="col-9">
                        <InstructionsComponent recipeInstructions={{ steps: [] }} />
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    debugger
    return ({
        recipe: state.recipeReducer.recipe
    })
}


const propertyToDispatchMapper = (dispatch) => ({
    findRecipeInfoById: (recipeId) => findRecipeInfoById(dispatch, recipeId),
    findRecipeInstructionsById: (recipeId) => findRecipeInstructionsById(dispatch, recipeId),
    addRecipeForMeal: (mealId, recipe) => addRecipeForMeal(dispatch, mealId, recipe)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (RecipeDetails)
