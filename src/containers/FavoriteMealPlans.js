import { connect } from "react-redux";
import '../css/FavoriteMealPlans.css';
import React, { Component } from 'react';
import {
  getFavoritesByFollowerId
} from '../actions/favoriteActions';
import { profile } from "../actions/userActions";
import {
  findMealPlanById
} from '../services/MealPlanService';

class FavoriteMealPlans extends Component {

  componentDidMount() {
    if (this.props.user.id === undefined || this.props.user.id === "") {
      this.props.profile().then(() => {
        if (this.props.user.id === undefined || this.props.user.id === "") {
          //if user is not signed in
        } else if (this.props.user.userType === "creator") {
          //if user is a creator
        } else {
          //if user is follower
          this.props.getFavoritesByFollowerId(this.props.user.id)
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">My Favorite Meal Plans</h1>
        <ul className="favorites-list">
          {
            this.props.favorites.map(favorite => <li>{favorite.mealPlanName}</li>)
          }
        </ul>
      </div>
    )
  }
}



const stateToPropertyMapper = (state) => {
  console.log(state)
  return ({
    favorites: state.favoriteReducer.favorites,
    user: state.userReducer.user
  })

}

const propertyToDispatchMapper = (dispatch) => ({
  getFavoritesByFollowerId: (followerId) => getFavoritesByFollowerId(dispatch, followerId),
  profile: () => profile(dispatch),
})

export default connect
  (stateToPropertyMapper, propertyToDispatchMapper)
  (FavoriteMealPlans)
