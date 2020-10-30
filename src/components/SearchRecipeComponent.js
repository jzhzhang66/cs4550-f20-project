import React from "react";
import RecipeService from "../services/RecipeService";

export default class SearchRecipeComponent extends React.Component {
  constructor() {
    super();
    this.state = {keyword: '',
  recipes: []};
  }

  keywordChanged = (event) => {
    this.setState({keyword: event.target.value});
  }

  searchRecipe = (results) =>
      RecipeService.searchRecipe(results).then((response) => 
        this.renderRecipes(response));

  renderRecipes = (results) => {
    this.setState({recipes: results.results});
    console.log(this.state.recipes);
  }


  render() {
    return(
        <div className="container">
          <h2>Search Recipes</h2>
          <div className="input-group">
            <input className="form-control"
                   placeholder="keywords"
                   value={this.state.keyword}
                   onChange={this.keywordChanged}/>
            <div className="input-group-append">
              <button onClick={() => this.searchRecipe(this.state.keyword)}
                      className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
          {
            this.state.recipes.map((recipe, index) => <li className="list-group-item" key={index}>{recipe.title} {recipe.image}</li>)
          }
        </div>
    )
  }
}

