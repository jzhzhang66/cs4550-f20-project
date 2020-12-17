import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/RecipeTable.css';
import '../App.css';
import '../css/IngredientTable.css';
import { addFavorite } from '../actions/favoriteActions';
import { profile } from "../actions/userActions";
import { getFavoritesByFollowerId } from "../services/FavoriteService"
import { getCreators } from '../actions/profileActions';

class MealPlanResultsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: [],
            canAdd: false
        }
    }

    componentDidMount() {
        debugger
        this.props.profile().then(() => {
            debugger
            if (this.props.user.id === undefined || this.props.user.id === "") {
                this.setState({ ...this.state, canAdd: false })
            } else if (this.props.user.userType === "creator") {
                this.setState({ ...this.state, canAdd: false })
            } else {
                this.props.getCreators(this.props.user.id)
                this.setState({ ...this.state, canAdd: true })
            }
        })
        getFavoritesByFollowerId(this.props.user.id).then(favorites => this.setState({ ...this.state, favorites: favorites }))
    }

    isAlreadyFavorited = (mealPlanId) => {
        return this.props.favorites.find(f => {
            return f.mealPlanId === mealPlanId
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
                                {this.state.canAdd &&
                                    !this.isAlreadyFavorited(mealPlan.id) &&
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
    addFavorite: (favorite) => addFavorite(dispatch, favorite),
    profile: () => profile(dispatch),
    getCreators: (userId) => getCreators(dispatch, userId)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (MealPlanResultsTable)
