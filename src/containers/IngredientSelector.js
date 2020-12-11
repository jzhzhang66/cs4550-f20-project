import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchIngredient from "../components/SearchIngredient";
import IngredientTable from '../components/IngredientTable';

// put the router in here
class IngredientSelector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="container">
          <SearchIngredient/>
          <IngredientTable/>
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (IngredientSelector)
