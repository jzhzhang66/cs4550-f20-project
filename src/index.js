import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';
import RecipeContainer from "./containers/RecipeContainer";

ReactDOM.render(
  <RecipeContainer/>,
  document.getElementById('root')
);

