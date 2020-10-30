import React from 'react';
import SearchRecipeComponent from "../components/SearchRecipeComponent";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeRowComponent from '../components/RecipeRowComponent';

// put the router in here
export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Recipes</h1>
          <Route path="/" component={SearchRecipeComponent}/>
          <Route path="/" component={RecipeRowComponent} />
        </div>
      </Router>
    )
  }
}
