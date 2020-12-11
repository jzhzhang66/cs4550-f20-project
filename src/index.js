import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import RecipeSelector from "./containers/RecipeSelector";
import IngredientSelector from "./containers/IngredientSelector";
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
import MealPlanEditor from "./containers/MealPlanEditor";
import MealPlanManager from "./containers/MealPlanManager";
import dailyPlanReducer from "./reducers/dailyPlanReducer"
import mealPlanReducer from "./reducers/mealPlanReducer"
import mealReducer from "./reducers/mealReducer"
import recipesAndIngredientsReducer from "./reducers/recipesAndIngredientsReducer"
import Search from "./containers/Search"

const rootReducer = combineReducers({
  recipeReducer, profileReducer, homeReducer, userReducer, mealPlanReducer, mealReducer, dailyPlanReducer, recipesAndIngredientsReducer
});

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePageContainer}/>
      <Route path="/profile" exact component={ProfilePageContainer} />
      <Route path="/profile/:userId" exact component={OthersProfilePageContainer} />
      <Route path="/search" exact component={Search} />
      <Route path="/search/recipes" exact component={RecipeSelector} />
      <Route path="/search/ingredients" exact component={IngredientSelector} />
      <Route path="/recipes/:recipeId" exact component={RecipeDetailsContainer}/>
      <Route path="/login" exact component={LoginPageContainer}/>
      <Route path="/register" exact component={RegistrationPageContainer}/>
      <Route path="/editprofile" exact component={EditProfile} />
      <Route path="/mealplans" exact component={MealPlanManager} />
      <Route path={["/edit/:mealPlanId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/topics/:topicId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/topics/:topicId/widgets/:widgetId"]}
        exact
        component={MealPlanEditor} />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

