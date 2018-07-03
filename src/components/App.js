import React from 'react';
//import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UserRoute from './routes/UserRoute';
import GuestRoute from './routes/GuestRoute';

const App = ({location}) => (
  <div className="ui container">
    <GuestRoute location={location} path="/" exact component={IndexPage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
  </div>
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;