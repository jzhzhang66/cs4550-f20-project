import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfilePageContainer.css';
import {
    updateFollowersExpanded,
    updateFollowingExpanded
} from "../actions/profileActions"

const ProfilePageContainer = ({updateFollowersExpanded, updateFollowingExpanded, followingExpanded, followersExpanded,
followers, following}) =>
    <div className="container">
        <h1 className="header">Profile Page</h1>
        <div className="row">
        <div className="col-6 followers-span">
            <h1 className="length">{followers.length}</h1>
        <h2><b className="btn-padding">Followers</b>
                {!followersExpanded &&  <button onClick={() => updateFollowersExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                {followersExpanded &&  <button onClick={() => updateFollowersExpanded(false)} className="btn btn-outline-secondary">contract</button>}
            </h2>
            {followersExpanded &&  
            <ul>
                {
                    followers.map(follower => <li>{follower.name}</li>)
                }
            </ul>}
        </div>
        <div className="col-6 following-span">
            <h1 className="length">{following.length}</h1>
            <h2><b className="btn-padding">Following</b>
                {!followingExpanded &&  <button onClick={() => updateFollowingExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                {followingExpanded &&  <button onClick={() => updateFollowingExpanded(false)} className="btn btn-outline-secondary">contract</button>}
            </h2>
            {followingExpanded &&  
            <ul>
                {
                    following.map(following => <li>{following.name}</li>)
                }
            </ul>}
        </div>
        </div>
    </div>

const stateToPropertyMapper = (state) => ({
    followingExpanded: state.profileReducer.followingExpanded,
    followersExpanded: state.profileReducer.followersExpanded,
    following: state.profileReducer.following,
    followers: state.profileReducer.followers
})

const propertyToDispatchMapper = (dispatch) => ({
    updateFollowersExpanded: (expanded) => updateFollowersExpanded(dispatch, expanded),
    updateFollowingExpanded: (expanded) => updateFollowingExpanded(dispatch, expanded)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ProfilePageContainer)