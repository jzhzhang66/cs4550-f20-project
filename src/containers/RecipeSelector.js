import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchRecipe from "../components/SearchRecipe";
import RecipeTable from '../components/RecipeTable';

// put the router in here
class RecipeSelector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="container">
          <SearchRecipe/>
          <RecipeTable mealId={this.props.match.params.mealId}/>
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
    (RecipeSelector)
