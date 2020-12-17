import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import '../css/IngredientTable.css';
import { addFavorite } from '../actions/favoriteActions';

class MealPlanResultsTable extends Component {

    isAlreadyFavorited = (favoriteId) => {
        return this.props.favorites.find(f => {
            return f.id === favoriteId
        });
    }

    render() {
        return (
            <div>
                <ul className="recipe-list">
                    {
                        this.props.mealPlans.map(mealPlan =>
                            <li className="list-group-item list-item">
                                <Link to={`./mealPlan/${mealPlan.id}`} className="recipe-title">
                                    {mealPlan.name}
                                </Link>
                                {!this.isAlreadyFavorited(mealPlan.id) &&
                                    <button className="btn btn-outline-secondary"
                                        onClick={() => this.props.addFavorite({ followerId: this.props.user.id, mealPlanId: mealPlan.id, time: new Date(), mealPlanName: mealPlan.name })}>Add to favorites</button>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

}



const stateToPropertyMapper = (state) => {
    console.log(state)
    return ({
        mealPlans: state.mealPlanReducer.mealPlans,
        user: state.userReducer.user,
        favorites: state.favoriteReducer.favorites
    })
}

const propertyToDispatchMapper = (dispatch) => ({
    addFavorite: (favorite) => addFavorite(dispatch, favorite)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (MealPlanResultsTable)
