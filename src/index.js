import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import RecipeSelectorContainer from "./containers/RecipeSelectorContainer";
import recipeReducer from "./reducers/recipeReducer";
import profileReducer from './reducers/profileReducer';
import RecipeDetailsContainer from "./containers/RecipeDetailsContainer";
import ProfilePageContainer from './containers/ProfilePageContainer';
import OthersProfilePageContainer from './containers/OthersProfilePageContainer';

const rootReducer = combineReducers({
  recipeReducer,
  profileReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/profile" exact component={ProfilePageContainer} />
      <Route path="/profile/:userId" exact component={OthersProfilePageContainer} />
      <Route path="/recipes" exact component={RecipeSelectorContainer} />
      <Route path="/recipes/:recipeId" exact component={RecipeDetailsContainer}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

