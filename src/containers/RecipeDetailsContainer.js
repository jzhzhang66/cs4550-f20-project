import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/RecipeDetails.css';
import IngredientsComponent from "../components/IngredientsComponent";
import InstructionsComponent from "../components/InstructionsComponent";
import {
    findRecipeInfoById,
    findRecipeInstructionsById
} from "../actions/recipeActions"

// put the router in here
class RecipeDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        this.props.findRecipeInfoById(recipeId)
        debugger
        this.props.findRecipeInstructionsById(recipeId)
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
                <div className="row">
                    <div className="col-3">
                        <IngredientsComponent />
                    </div>
                    <div className="col-9">
                        <InstructionsComponent />
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    recipe: state.recipeReducer.recipe
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecipeInfoById: (recipeId) => findRecipeInfoById(dispatch, recipeId),
    findRecipeInstructionsById: (recipeId) => findRecipeInstructionsById(dispatch, recipeId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (RecipeDetailsContainer)