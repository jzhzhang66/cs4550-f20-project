import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../css/SearchRecipe.css"

import {
    findIngredients,
    updateKeyword
} from "../actions/ingredientActions"

const SearchIngredient = (
    { keyword, ingredients = [],
        findIngredients, updateKeyword }) =>
{console.log(ingredients)
    return <div>
        <h1 className="search-recipes-header">Search Ingredients</h1>
        <div className="search-bar">
            <input className="form-control mx-auto search-fld"
                placeholder="keywords"
                value={keyword}
                onChange={(event) => updateKeyword(event.target.value)} />
            <div className="input-group-append mx-auto search-btn">
                <button onClick={() => findIngredients(keyword)}
                    className="btn btn-secondary">
                    Search
            </button>
            </div>
        </div>
    </div>

}

const stateToPropertyMapper = (state) => ({
    ingredients: state.ingredientReducer.ingredients,
    keyword: state.ingredientReducer.keyword
})

const propertyToDispatchMapper = (dispatch) => ({
    findIngredients: (ingredientName) => findIngredients(dispatch, ingredientName),
    updateKeyword: (keyword) => updateKeyword(dispatch, keyword)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (SearchIngredient)

