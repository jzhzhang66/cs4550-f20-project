import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/ProfilePage.css';
import {getUserById, profile} from "../actions/userActions";
import {addFollowing} from "../actions/profileActions";
import ViewMealPlanCard from "../components/ViewMealPlanCard";
import {
  findMealPlansByCreator,
  getFavoriteMealPlansByFollowerId
} from "../actions/mealPlanActions"

class OthersProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.getUserById(this.props.match.params.userId)
    .then(user => this.getUserMealPlans(user))
    this.props.profile().then(
        profile => this.setState({currentUser: profile.user}))
  }

  getUserMealPlans(user) {
    if (user.user.userType === 'creator') {
      this.props.findMealPlansByCreator(user.user.id).then(mealPlans => this.setState({mealPlans: mealPlans.mealPlans}))
    } else {
      this.props.getFavoritesByFollowerId(user.user.id).then(mealPlans => this.setState({mealPlans: mealPlans.mealPlans}))
    }
  }

  render() {
    return (
        <div className="container">
          <h1 className="header name">{this.props.user.username}'s
            Page</h1>
          {this.state.currentUser.userType === 'follower' && <h1
              className="text-center">
            <button onClick={() => this.handleFollowSubmit()}
                    className="btn btn-outline-success follow-button">Follow
            </button>
          </h1>}

          {this.props.user.userType === 'follower' && <h2>Favorited meal plans</h2>}
          {this.props.user.userType === 'creator' && <h2>Created meal plans</h2>}
          <div className="card-deck">
            {this.state.mealPlans.map(mealPlan =>
                <ViewMealPlanCard
                    mealPlan={mealPlan}
                    viewedUser={this.props.user}/>
            )}
          </div>
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return ({
    user: state.userReducer.user,
    mealPlans: state.mealPlanReducer.mealPlans
  })
}

const propertyToDispatchMapper = (dispatch) => ({
  getUserById: (userId) => getUserById(dispatch, userId),
  profile: () => profile(dispatch),
  addFollowing: (newFollowing) => addFollowing(dispatch, newFollowing),
  findMealPlansByCreator: (creatorId) => findMealPlansByCreator(dispatch,
      creatorId),
  getFavoritesByFollowerId: (uid) => getFavoriteMealPlansByFollowerId(dispatch, uid)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(OthersProfilePage)

