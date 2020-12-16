import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
  getRecentFavorites,
  getRecentFollowings
} from "../actions/homeActions";
import '../css/HomePage.css';
import {profile} from "../actions/userActions";
import {findAllMealPlans} from "../actions/mealPlanActions";
import ViewMealPlanCard from "../components/ViewMealPlanCard";
import ViewUserCard from "../components/ViewUserCard";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealPlans: [],
      randomIndex: ''
    }
  }

  componentDidMount() {
    this.props.profile().then(() => {
      if (this.props.user.userType === "creator") {
        this.props.getRecentFollowings(this.props.user.id).then(
            mealPlans => this.setState({mealPlans: mealPlans.mealPlans}))
      } else if (this.props.user.userType === 'follower') {
        this.props.getRecentFavorites(this.props.user.id).then(
            mealPlans => this.setState({mealPlans: mealPlans.mealPlans}))
      }
    })
    this.props.findAllMealPlans().then(mealPlans => this.setRandomIndex(mealPlans.mealPlans.length))
  }

  setRandomIndex(length) {
    this.setState({randomIndex: Math.floor(Math.random() * length - 4)});
  }

  // to do: pass in the correct user to map, limit array shown, possibly implement arrow keys to continue browsing
  render() {
    return (
        <div className="container">
          <h3 className="header-styling">Meal Plans</h3>
          <div className="card-deck">
            {this.props.mealPlans.slice(0, 8).map(mealPlan =>
                <div className="col-md-3">
                  <ViewMealPlanCard
                      mealPlan={mealPlan}
                      creator={this.props.user}/>
                </div>
            )}
          </div>

          {
            this.props.user.userType === 'follower' && <div>
              <h3 className="header-styling">Your recently favorited plans</h3>
              {this.props.recentFavorites.length === 0 &&
              <h4>It looks like you haven't favorited anything. Click <Link
                  to="/search/mealplans">HERE</Link> to search for your favorite meal plans!</h4>
              }
              <div className="card-deck">
                {this.props.recentFavorites.slice(0, 4).map(mealPlan =>
                    <div className="col-md-3">
                      <ViewMealPlanCard
                          mealPlan={mealPlan}
                          creator={this.props.user}/>
                    </div>
                )}
              </div>
            </div>
          }


          {
            this.props.user.userType === 'creator' && <div>
              <h3 className="header-styling">Users that recently followed
                you</h3>
              {this.props.recentFollowings.length === 0 &&
              <h4>It looks like you don't have any followers. Click <Link
                  to="/mealplans">HERE</Link> to make your next meal plan!</h4>
              }
              <div className="card-deck">
                {this.props.recentFollowings.map(user =>
                    <div className="col-md-3">
                      <ViewUserCard
                          user={user}/>
                    </div>
                )}
              </div>
            </div>
          }


        </div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  mealPlans: state.mealPlanReducer.mealPlans,
  user: state.userReducer.user,
  recentFollowings: state.homeReducer.recentFollowings,
  recentFavorites: state.homeReducer.recentFavorites
});

const propertyToDispatchMapper = (dispatch) => ({
  profile: () => profile(dispatch),
  getRecentFavorites: (userId) => getRecentFavorites(dispatch, userId),
  getRecentFollowings: (userId) => getRecentFollowings(dispatch, userId),
  findAllMealPlans: () => findAllMealPlans(dispatch)
});

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(HomePage)
