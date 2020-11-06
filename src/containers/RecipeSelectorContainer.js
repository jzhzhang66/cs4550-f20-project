import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchRecipeComponent from "../components/SearchRecipeComponent";
import RecipeTableComponent from '../components/RecipeTableComponent';

// put the router in here
class RecipeContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="container">
          <h1>Recipe</h1>
          <SearchRecipeComponent/>
          <RecipeTableComponent/>
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (RecipeContainer)