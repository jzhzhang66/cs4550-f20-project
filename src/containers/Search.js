import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/Search.css";

class Search extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-4"></div>
                <div className="col-6">
                <h1 className="search">Search</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-6">
                        <Link to="/search/recipes">
                            <button className="btn btn-outline-secondary recipes-button">
                            <h2>Recipes</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/search/ingredients">
                        <button className="btn btn-outline-secondary ingredients-button">
                            <h2>Ingredients</h2>
                            </button>
                        </Link>
                    </div>
                </div>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-6">
                  <Link to="/userlist">
                    <button className="btn btn-outline-secondary ingredients-button">
                      <h2>User List</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        )
    }
}

export default Search 
