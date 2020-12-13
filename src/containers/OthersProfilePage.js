import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/ProfilePage.css';
import {
    updateFollowersExpanded,
    updateFollowingExpanded
} from "../actions/profileActions"
import MyRecipes from '../components/MyRecipes';
import FavoriteRecipes from '../components/FavoriteRecipes';

const OthersProfilePage = ({ updateFollowersExpanded, updateFollowingExpanded, followingExpanded, followersExpanded,
    followers, following }) =>
    <div className="container">
        <h1 className="header name">Bohn Bu</h1>
        <h1 className="text-center"><button className="btn btn-outline-success follow-button">Follow</button></h1>
        <div className="row">
            <div className="col-3">
                <div>
                    <h1 className="length">{followers.length}</h1>
                    <h3><b className="btn-padding">Followers</b>
                        {!followersExpanded && <button onClick={() => updateFollowersExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                        {followersExpanded && <button onClick={() => updateFollowersExpanded(false)} className="btn btn-outline-secondary">contract</button>}
                    </h3>
                    {followersExpanded &&
                        <ul>
                            {
                                followers.map(follower => <li>{follower.name}</li>)
                            }
                        </ul>}
                </div>
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
            </div>
            <div className="col-7">
                <h3 className="header-padding">Bohn's Recipes</h3>
                <MyRecipes />
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
    (OthersProfilePage)
