import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import FavoriteMealPlans from "./containers/FavoriteMealPlans"
import RecipeSelector from "./containers/RecipeSelector";
import IngredientSelector from "./containers/IngredientSelector";
import recipeReducer from "./reducers/recipeReducer";
import RecipeDetails from "./containers/RecipeDetails";
import IngredientDetails from "./containers/IngredientDetails";
import OthersProfilePage from './containers/OthersProfilePage';
import HomePage from "./containers/HomePage";
import ProfilePage from "./containers/ProfilePage";
import profileReducer from "./reducers/profileReducer";
import homeReducer from "./reducers/homeReducer";
import userReducer from "./reducers/userReducer";
import NavBar from './components/NavBar';
import LoginPage from './containers/LoginPage';
import Register from './containers/Register';
import EditProfile from "./components/EditProfile";
import MealPlanEditor from "./containers/MealPlanEditor";
import MealPlanManager from "./containers/MealPlanManager";
import dailyPlanReducer from "./reducers/dailyPlanReducer"
import mealPlanReducer from "./reducers/mealPlanReducer"
import mealReducer from "./reducers/mealReducer"
import ingredientReducer from "./reducers/ingredientReducer"
import recipesAndIngredientsReducer from "./reducers/recipesAndIngredientsReducer"
import Search from "./containers/Search"

const rootReducer = combineReducers({
  recipeReducer, profileReducer, homeReducer, userReducer, mealPlanReducer, mealReducer, 
  dailyPlanReducer, recipesAndIngredientsReducer, ingredientReducer
});

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/profile/favorites" exact component={FavoriteMealPlans}/>
      <Route path="/profile/:userId" exact component={OthersProfilePage} />
      <Route path="/search" exact component={Search} />
      <Route path="/search/recipes" exact component={RecipeSelector} />
      <Route path="/search/ingredients" exact component={IngredientSelector} />
      <Route path={["/recipes/:recipeId", 
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/recipesAndIngredients/search/recipes/:recipeId"]} 
      exact component={RecipeDetails}/>
      <Route path={["/ingredients/:ingredientId", 
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/recipesAndIngredients/search/ingredients/:ingredientId"]}  exact component={IngredientDetails}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/editprofile" exact component={EditProfile} />
      <Route path="/mealplans" exact component={MealPlanManager} />
      <Route path={["/edit/:mealPlanId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId",
      "/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/recipesAndIngredients"]}
        exact
        component={MealPlanEditor} />
      <Route path="/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/recipesAndIngredients/search/ingredients" 
      exact component={IngredientSelector}/>
      <Route path="/edit/:mealPlanId/dailyPlans/:dailyPlanId/meals/:mealId/recipesAndIngredients/search/recipes" 
      exact component={RecipeSelector}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

