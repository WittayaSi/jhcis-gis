import React from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import { fetchHomes } from '../actions/homeAction';

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchHomes());
    //console.log("componentDisMount");
  }

  render() {
    //console.log(this.props);
    const { error, loading, data } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {
          data.map(
              d=><li key={d.hcode}>{d.hno} - xgis : {d.xgis} - ygis : {d.ygis}</li>
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    data: state.homeReducer.data,
    loading: state.homeReducer.loading,
    error: state.homeReducer.error
  }
}

export default connect(
  mapStateToProps
)(App);