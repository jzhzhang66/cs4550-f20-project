import React from 'react';
import SearchRecipeComponent from "../components/SearchRecipeComponent";

// put the router in here
export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
          <h1>Recipes</h1>
          <SearchRecipeComponent/>
        </div>
    )
  }
}
