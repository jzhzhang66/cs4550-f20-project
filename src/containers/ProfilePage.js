import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfilePage.css';
import {
    updateFollowersExpanded,
    updateFollowingExpanded
} from "../actions/profileActions"
import {Link} from 'react-router-dom';

const ProfilePage = ({ updateFollowersExpanded, updateFollowingExpanded, followingExpanded, followersExpanded,
    followers, following, type }) =>
    <div className="container">
        <h1 className="header">My Profile</h1>
        <div className="row">
            <div className="col-4">
                {type === "creator" &&
                    <div>
                        <h1 className="length">{followers.length}</h1>
                        <h3><b className="btn-padding">Followers</b>
                            {!followersExpanded && <button
                                onClick={() => updateFollowersExpanded(true)}
                                className="btn btn-outline-secondary">expand</button>}
                            {followersExpanded && <button
                                onClick={() => updateFollowersExpanded(false)}
                                className="btn btn-outline-secondary">contract</button>}
                        </h3>
                        {followersExpanded &&
                            <ul>
                                {
                                    followers.map(follower => <li>{follower.name}</li>)
                                }
                            </ul>}
                    </div>
                }
                {type === "follower" &&
                    <div>
                        <h1 className="length padding-top">{following.length}</h1>
                        <h3><b className="btn-padding">Following</b>
                            {!followingExpanded && <button onClick={() => updateFollowingExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                            {followingExpanded && <button onClick={() => updateFollowingExpanded(false)} className="btn btn-outline-secondary">contract</button>}
                        </h3>
                        {followingExpanded &&
                            <ul>
                                {
                                    following.map(following => <li>{following.name}</li>)
                                }
                            </ul>}
                    </div>
                }
            </div>
            {type === "creator" &&
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
            {type === "follower" &&
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

const stateToPropertyMapper = (state) => ({
    followingExpanded: state.profileReducer.followingExpanded,
    followersExpanded: state.profileReducer.followersExpanded,
    following: state.profileReducer.following,
    followers: state.profileReducer.followers,
    type: state.userReducer.type
})

const propertyToDispatchMapper = (dispatch) => ({
    updateFollowersExpanded: (expanded) => updateFollowersExpanded(dispatch, expanded),
    updateFollowingExpanded: (expanded) => updateFollowingExpanded(dispatch, expanded)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (ProfilePage)
