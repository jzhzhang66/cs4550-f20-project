import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/ProfilePage.css';
import {
    updateFollowersExpanded,
    updateFollowingExpanded,
    addFollowing
} from "../actions/profileActions"
import MyRecipes from '../components/MyRecipes';


class OthersProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <h1 className="header name">{this.props.user.username}</h1>
                <h1 className="text-center"><
                    button onClick={() => this.props.addFollowing({followerId: this.props.followerId, creatorId: this.props.match.params.userId, time: new Date()})}
                           className="btn btn-outline-success follow-button">Follow</button></h1>
                <div className="row">
                    <div className="col-3">
                        <div>
                            <h1 className="length">{this.props.followers.length}</h1>
                            <h3><b className="btn-padding">Followers</b>
                                {!this.props.followersExpanded && <button onClick={() => this.props.updateFollowersExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                                {this.props.followersExpanded && <button onClick={() => this.props.updateFollowersExpanded(false)} className="btn btn-outline-secondary">contract</button>}
                            </h3>
                            {this.props.followersExpanded &&
                            <ul>
                                {
                                    this.props.followers.map(follower => <li>{follower.name}</li>)
                                }
                            </ul>}
                        </div>
                        <div>
                            <h1 className="length padding-top">{this.props.following.length}</h1>
                            <h3><b className="btn-padding">Following</b>
                                {!this.props.followingExpanded && <button onClick={() => this.props.updateFollowingExpanded(true)} className="btn btn-outline-secondary">expand</button>}
                                {this.props.followingExpanded && <button onClick={() => this.props.updateFollowingExpanded(false)} className="btn btn-outline-secondary">contract</button>}
                            </h3>
                            {this.props.followingExpanded &&
                            <ul>
                                {
                                    this.props.following.map(following => <li>{this.props.following.name}</li>)
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
        )
    }
}

const stateToPropertyMapper = (state) => ({
    followingExpanded: state.profileReducer.followingExpanded,
    followersExpanded: state.profileReducer.followersExpanded,
    following: state.profileReducer.following,
    followers: state.profileReducer.followers,
    user: state.userReducer.user
})

const propertyToDispatchMapper = (dispatch) => ({
    updateFollowersExpanded: (expanded) => updateFollowersExpanded(dispatch, expanded),
    updateFollowingExpanded: (expanded) => updateFollowingExpanded(dispatch, expanded),
    addFollowing: (newFollowing) => addFollowing(dispatch, newFollowing)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (OthersProfilePage)
