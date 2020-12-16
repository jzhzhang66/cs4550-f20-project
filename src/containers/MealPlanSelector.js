import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchMealPlan from "../components/SearchMealPlan";
import MealPlanResultsTable from '../components/MealPlanResultsTable';

// put the router in here
class MealPlanSelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="container">
          <SearchMealPlan/>
          <MealPlanResultsTable/>
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
    (MealPlanSelector)
