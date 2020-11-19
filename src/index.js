import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import RecipeSelectorContainer from "./containers/RecipeSelectorContainer";
import recipeReducer from "./reducers/recipeReducer";
import RecipeDetailsContainer from "./containers/RecipeDetailsContainer";
import HomePageContainer from "./containers/HomePageContainer";
import ProfilePageContainer from "./containers/ProfilePageContainer";
import profileReducer from "./reducers/profileReducer";
import homeReducer from "./reducers/homeReducer";

const rootReducer = combineReducers({
  recipeReducer, profileReducer, homeReducer
});

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={HomePageContainer}/>
      <Route path="/profile" component={ProfilePageContainer}/>
      <Route path="/recipes" exact component={RecipeSelectorContainer} />
      <Route path="/recipes/:recipeId" exact component={RecipeDetailsContainer}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

