import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import RecipeSelectorContainer from "./containers/RecipeSelector";
import recipeReducer from "./reducers/recipeReducer";
import RecipeDetailsContainer from "./containers/RecipeDetails";
import OthersProfilePageContainer from './containers/OthersProfilePage';
import HomePageContainer from "./containers/HomePage";
import ProfilePageContainer from "./containers/ProfilePage";
import profileReducer from "./reducers/profileReducer";
import homeReducer from "./reducers/homeReducer";
import userReducer from "./reducers/userReducer";
import NavBar from './components/NavBar';
import LoginPageContainer from './containers/LoginPage';
import RegistrationPageContainer from './containers/RegistrationPage';
import EditProfile from "./components/EditProfile";

const rootReducer = combineReducers({
  recipeReducer, profileReducer, homeReducer, userReducer
});

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePageContainer}/>
      <Route path="/profile" exact component={ProfilePageContainer} />
      <Route path="/profile/:userId" exact component={OthersProfilePageContainer} />
      <Route path="/recipes" exact component={RecipeSelectorContainer} />
      <Route path="/recipes/:recipeId" exact component={RecipeDetailsContainer}/>
      <Route path="/login" exact component={LoginPageContainer}/>
      <Route path="/register" exact component={RegistrationPageContainer}/>
      <Route path="/editProfile" exact component={EditProfile} />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

