import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/ProfilePage.css';
import {
    updateFollowersExpanded,
    updateFollowingExpanded,
    getFollowers,
    getCreators,
    deleteFollowing
} from "../actions/profileActions"
import { Link } from 'react-router-dom';
import { profile } from "../actions/userActions";
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
            following: [],
            mealPlans: []
        }
    }

    componentDidMount() {
        this.props.profile().then(() => {
            debugger
            if (this.props.user.id === undefined || this.props.user.id === "") {
                this.props.history.push('/login')
            } else if (this.props.user.userType === "creator") {
                this.props.getFollowers(this.props.user.id)
                this.props.findMealPlansByCreator(this.props.user.id).then(mealPlans => this.setState({ mealPlans: mealPlans.mealPlans }))
            } else {
                this.props.getCreators(this.props.user.id)
                this.props.getFavoritesByFollowerId(this.props.user.id).then(mealPlans => this.setState({ mealPlans: mealPlans.mealPlans }))
            }
        })
    }

    //TODO: redirect to login if not signed in
    // need create new profile component at /profile/:userId for someone to see another person's profile
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
                                            this.props.followers.map(follower =>
                                                <li>
                                                    <Link to={`/profile/${follower.id}`}>
                                                        {follower.username}
                                                    </Link>
                                                </li>)
                                        }
                                    </ul>}
                            </div>
                        }
                        {this.props.user.userType === "follower" &&
                            <div>
                                <h1 className="length padding-top">{this.props.following.length}</h1>
                                <h3><b className="btn-padding">Following</b>
                                    {!this.props.followingExpanded && <button onClick={() => this.props.updateFollowingExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                                    {this.props.followingExpanded && <button onClick={() => this.props.updateFollowingExpanded(false)} className="btn btn-outline-secondary">contract</button>}
                                </h3>
                                {
                                    this.props.followingExpanded &&
                                    <ul>
                                        {
                                            this.props.following.map(following =>
                                                <li>
                                                    <button type="button"
                                                        className="btn btn-outline-danger inline"
                                                        onClick={() => this.props.deleteFollowing(this.props.user.id, following.id)}>
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                    <span class="ml-1">
                                                        <Link to={`/profile/${following.id}`}>
                                                            {following.username}
                                                        </Link>
                                                    </span>
                                                </li>)
                                        }
                                    </ul>
                                }
                                <Link className="link" to={`/userlist`}>
                                    <button class="btn btn-outline-success">
                                        Add Followers
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>
                    {this.props.user.userType === "creator" &&
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
                    {this.props.user.userType === "follower" &&
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
    deleteFollowing: (fid, cid) => deleteFollowing(dispatch, fid, cid),
    findMealPlansByCreator: (creatorId) => findMealPlansByCreator(dispatch,
        creatorId),
    getFavoritesByFollowerId: (uid) => getFavoriteMealPlansByFollowerId(dispatch, uid)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (ProfilePage)
