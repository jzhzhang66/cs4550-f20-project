import React from 'react';

class HomePageContainer extends React.Component {

  render() {
    return(
        <div className="container">

          {/*make navbar component*/}
          <nav className="navbar sticky-top">
            <a className="navbar-brand">
              <i className="fas fa-bars wbdv-pad-right-5-px"></i>Home Page</a>
            <form className="form-inline float-right">
              <input className="form-control mr-sm-2 wbdv-field wbdv-new-course"
                     placeholder="Search for a recipe"></input>
              <button
                  className="btn btn-outline-info my-2 my-sm-0">
                <i className="fas fa-plus"></i>
              </button>
            </form>
          </nav>

        


        </div>
    )
  }

}

export default HomePageContainer
