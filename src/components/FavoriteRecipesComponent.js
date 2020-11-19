import React, { Component } from 'react';
import './FavoriteRecipesComponent.css';

const recipes = [
    { id: 123, title: 'tiramusu', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 234, title: 'chocolate cake', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 345, title: 'chicken pot pie', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 456, title: 'tomato soup', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 567, title: 'stir fried rice', time: '1 hour', servings: 2, created: '11/11/19' }
]

const FavoriteRecipesComponent = () =>
    <div>
        <h3 >{"Favorites <3"}</h3>
        <ul className="list">
            {recipes.map(recipe => <li>{recipe.title}</li>)}
        </ul>
    </div>

export default FavoriteRecipesComponent