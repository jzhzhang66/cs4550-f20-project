import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RecipeService from "../services/RecipeService";
import '../App.css';
class RecipeRowComponent extends Component {

    render() {
        return (
            <div>
                <li className="list-group-item">
                    <Link to={`/${this.props.key}`}>{this.props.title}</Link>
                    <img src={this.props.image} alt="" />
                </li>
            </div>
        )
    }
}

export default RecipeRowComponent