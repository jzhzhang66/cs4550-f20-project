import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/ProfilePage.css';
import {
  updateFollowersExpanded,
  updateFollowingExpanded,
  getFollowers,
  getCreators
} from "../actions/profileActions"
import {Link} from 'react-router-dom';
import {profile} from "../actions/userActions";
import {
  findMealPlansByCreator,
  getFavoriteMealPlansByFollowerId
} from "../actions/mealPlanActions";
import ViewMealPlanCard from "../components/ViewMealPlanCard";

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {
        userId: '',
        username: '',
        userType: ''
      },
      followers: [],
      following: []
    }
  }

  componentDidMount() {
    this.props.profile().then(() => {
      debugger
      if (this.props.user.id === "") {
        this.props.history.push('/login')
      } else if (this.props.user.userType === "creator") {
        this.props.getFollowers(this.props.user.id)
        this.props.findMealPlansByCreator(this.props.user.id)
      } else {
        this.props.getCreators(this.props.user.id)
        this.props.getFavoritesByFollowerId(this.props.user.id)
      }
    })
  }

  render() {
    return (
        <div className="container">
          <h1 className="header">My Profile</h1>
          <div className="row">
            <div className="col-4">
              {this.props.user.userType === "creator" &&
              <div>
                <h1 className="length">{this.props.followers.length}</h1>
                <h3><b className="btn-padding">Followers</b>
                  {!this.props.followersExpanded && <button
                      onClick={() => this.props.updateFollowersExpanded(true)}
                      className="btn btn-outline-secondary">expand</button>}
                  {this.props.followersExpanded && <button
                      onClick={() => this.props.updateFollowersExpanded(false)}
                      className="btn btn-outline-secondary">contract</button>}
                </h3>
                {this.props.followersExpanded &&
                <ul>
                  {
                    this.props.followers.map(
                        follower => <li>{follower.username}</li>)
                  }
                </ul>}
              </div>
              }
              {this.props.user.userType === "follower" &&
              <div>
                <h1 className="length padding-top">{this.props.following.length}</h1>
                <h3><b className="btn-padding">Following</b>
                  {!this.props.followingExpanded && <button
                      onClick={() => this.props.updateFollowingExpanded(true)}
                      className="btn btn-outline-secondary">expand</button>}
                  {this.props.followingExpanded && <button
                      onClick={() => this.props.updateFollowingExpanded(false)}
                      className="btn btn-outline-secondary">contract</button>}
                </h3>
                {this.props.followingExpanded &&
                <ul>
                  {
                    this.props.following.map(
                        following => <li>{following.username}</li>)
                  }
                </ul>}
              </div>
              }
            </div>
            {this.props.user.userType === "creator" &&
            <div>
              <div className="col-4">
                <Link to="/mealplans">
                  <button className="btn btn-secondary create-meal-plan">Create
                    Meal Plan
                  </button>
                </Link>
              </div>
            </div>
            }
            <div className="col-3">
              <Link to={'/editprofile'}>
                <button className="btn btn-secondary edit-profile">Edit
                  Profile
                </button>
              </Link>
              <h1>{this.props.user.username}</h1>
              {this.props.user.userType === 'follower' && <h2>Favorited meal plans</h2>}
              {this.props.user.userType === 'creator' && <h2>Created meal plans</h2>}
              <div className="card-deck">
                {this.props.mealPlans.map(mealPlan =>
                    <ViewMealPlanCard
                        mealPlan={mealPlan}
                        viewedUser={this.props.user}/>
                )}
              </div>
            </div>

          </div>
        </div>
    )
  }

}

const stateToPropertyMapper = (state) => ({
  followingExpanded: state.profileReducer.followingExpanded,
  followersExpanded: state.profileReducer.followersExpanded,
  following: state.profileReducer.following,
  followers: state.profileReducer.followers,
  user: state.userReducer.user,
  mealPlans: state.mealPlanReducer.mealPlans
})

const propertyToDispatchMapper = (dispatch) => ({
  updateFollowersExpanded: (expanded) => updateFollowersExpanded(dispatch,
      expanded),
  updateFollowingExpanded: (expanded) => updateFollowingExpanded(dispatch,
      expanded),
  profile: () => profile(dispatch),
  getFollowers: (userId) => getFollowers(dispatch, userId),
  getCreators: (userId) => getCreators(dispatch, userId),
  findMealPlansByCreator: (creatorId) => findMealPlansByCreator(dispatch,
      creatorId),
  getFavoritesByFollowerId: (uid) => getFavoriteMealPlansByFollowerId(dispatch, uid)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ProfilePage)
