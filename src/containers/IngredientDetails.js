import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/RecipeDetails.css';
import IngredientsComponent from "../components/Ingredients";
import InstructionsComponent from "../components/Instructions";
import {
    findIngredientInfoById,
} from "../actions/ingredientActions"
import "../css/IngredientDetails.css";
import { addIngredientForMeal } from "../actions/recipeAndIngredientActions";

// put the router in here
class IngredientDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        const ingredientId = this.props.match.params.ingredientId
        this.props.findIngredientInfoById(ingredientId)
    }

    render() {
        return (
            <div className="container">
                <h1 className="ingredient-header">{this.props.ingredient.name}</h1>
                {this.props.match.params.mealId && 
                                  <Link to={`/edit/${this.props.match.params.mealPlanId}/dailyPlans/${this.props.match.params.dailyPlanId}/meals/${this.props.match.params.mealId}/recipesAndIngredients`}>
                                  <button className="btn btn-outline-secondary add-ingredient"
                                      onClick={() => this.props.addIngredientForMeal(this.props.match.params.mealId, this.props.ingredient)}>Add</button>
                              </ Link>
                }

                <table className="table">
                    <thead>
                        <td>Possible Units</td>
                        <td>Consistency</td>
                        <td>Aisle</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    {console.log(this.props.ingredient)}
                                    {this.props.ingredient.possibleUnits.map(unit => <li>{unit}</li>)}
                                </ul>
                            </td>
                            <td>{this.props.ingredient.consistency}</td>
                            <td>{this.props.ingredient.aisle}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    ingredient: state.ingredientReducer.ingredient
})

const propertyToDispatchMapper = (dispatch) => {
    debugger
    return ({
        findIngredientInfoById: (ingredientId) => findIngredientInfoById(dispatch, ingredientId),
        addIngredientForMeal: (mealId, ingredient) => addIngredientForMeal(dispatch, mealId, ingredient)
    })
}

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (IngredientDetails)
