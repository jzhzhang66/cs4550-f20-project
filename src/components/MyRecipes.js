import React, { Component } from 'react';
import '../css/MyRecipes.css';
const recipes = [
    { id: 123, title: 'tiramusu', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 234, title: 'chocolate cake', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 345, title: 'chicken pot pie', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 456, title: 'tomato soup', time: '1 hour', servings: 2, created: '11/11/19' },
    { id: 567, title: 'stir fried rice', time: '1 hour', servings: 2, created: '11/11/19' }
]
const MyRecipes = () =>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Time</th>
                    <th>Servings</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map(recipe => 
                <tr>
                    <td>{recipe.title}</td>
                    <td>{recipe.time}</td>
                    <td>{recipe.servings}</td>
                    <td>{recipe.created}</td>
                </tr>)}
            </tbody>
        </table>

export default MyRecipes
