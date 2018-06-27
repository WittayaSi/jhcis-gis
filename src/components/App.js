import React from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import { fetchHomes } from '../actions/homeAction';

import HomeList from './HomeList';

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchHomes());
    //console.log("componentDisMount");
  }

  render() {
    return (
      <HomeList />
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.homeReducer.data,
    loading: state.homeReducer.loading,
    error: state.homeReducer.error
  }
}

export default connect(
  mapStateToProps
)(App);