import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ProfilePage.css';
import {
  updateFollowersExpanded,
  updateFollowingExpanded
} from "../actions/profileActions"
import {Link} from 'react-router-dom';
import {profile} from "../services/UserService";

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {
        userId: '',
        username: '',
        type: 'creator'
      },
      followers: [],
      following: []
    }
  }

  componentDidMount() {
    profile().then(profile => this.setState({
      profile: profile
    }))
  }

  //TODO: redirect to login if not signed in
  // need create new profile component at /profile/:userId for someone to see another person's profile
  render() {
    return (
        <div className="container">
          <h1 className="header">My Profile</h1>
          <div className="row">
              <div className="col-4">
                  {this.state.profile.type === "creator" &&
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
                                      this.props.followers.map(follower => <li>{follower.name}</li>)
                                  }
                              </ul>}
                      </div>
                  }
                  {this.state.profile.type === "follower" &&
                      <div>
                          <h1 className="length padding-top">{this.props.following.length}</h1>
                          <h3><b className="btn-padding">Following</b>
                              {!this.props.followingExpanded && <button onClick={() => this.props.updateFollowingExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                              {this.props.followingExpanded && <button onClick={() => this.props.updateFollowingExpanded(false)} className="btn btn-outline-secondary">contract</button>}
                          </h3>
                          {this.props.followingExpanded &&
                              <ul>
                                  {
                                      this.props.following.map(following => <li>{following.name}</li>)
                                  }
                              </ul>}
                      </div>
                  }
              </div>
              {this.state.profile.type === "creator" &&
                  <div>
                      <div className="col-4">
                          <Link to="/mealplans">
                              <button className="btn btn-secondary create-meal-plan">Create Meal Plan</button>
                          </Link>
                      </div>
                      <div className="col-5">
                          <button className="btn btn-secondary my-meal-plans">My Meal Plans</button>
                      </div>
                  </div>
              }
              {this.state.profile.type === "follower" &&
                  <div className="col-4">
                      <button className="btn btn-secondary favorite-meal-plan">Favorite Meal Plans</button>
                  </div>
              }
              <div className="col-3">
                  <Link to={'/editprofile'}>
                  <button className="btn btn-secondary edit-profile">Edit Profile</button>
                  </Link>
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
  type: state.userReducer.type
})

const propertyToDispatchMapper = (dispatch) => ({
  updateFollowersExpanded: (expanded) => updateFollowersExpanded(dispatch,
      expanded),
  updateFollowingExpanded: (expanded) => updateFollowingExpanded(dispatch,
      expanded)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ProfilePage)
