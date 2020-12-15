import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/ProfilePage.css';
import {getUserById} from "../services/UserService";
import {profile} from "../actions/userActions";
import {addFollowing} from "../actions/profileActions";
import ViewMealPlanCard from "../components/ViewMealPlanCard";
import {getMealPlanByCreator} from "../services/MealPlanService";

class OthersProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewedUser: [],
      currentUser: [],
      mealPlans: []
    }
  }

  handleFollowSubmit() {
    this.props.addFollowing({
      followerId: this.props.followerId,
      creatorId: this.props.match.params.userId,
      time: new Date()
    })
    alert(`You've followed ${this.state.viewedUser.username}!`)
  }

  componentDidMount() {
    getUserById(this.props.match.params.userId)
    .then(user => this.setState({viewedUser: user}))
    this.props.profile().then(
        profile => this.setState({currentUser: profile.user}))
    getMealPlanByCreator(this.state.viewedUser.id).then(
        mealPlans => this.setState({mealPlans: mealPlans}))
  }

  render() {
    return (
        <div className="container">
          <h1 className="header name">{this.state.viewedUser.username}'s
            Page</h1>
          {this.state.currentUser.userType === 'follower' && <h1
              className="text-center">
            <button onClick={() => this.handleFollowSubmit()}
                    className="btn btn-outline-success follow-button">Follow
            </button>
          </h1>}

          <h2>Created meal plans</h2>
          <div className="card-deck">
            {this.state.mealPlans.map(mealPlan =>
                <ViewMealPlanCard mealPlan={mealPlan}/>
            )}
          </div>
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({
  user: state.userReducer.user
})

const propertyToDispatchMapper = (dispatch) => ({
  profile: () => profile(dispatch),
  addFollowing: (newFollowing) => addFollowing(dispatch, newFollowing)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(OthersProfilePage)

