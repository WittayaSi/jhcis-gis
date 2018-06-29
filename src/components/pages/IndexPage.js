import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import HomeList from './HomeList';
import MapContainer from './MapContainer';
import NavigationBar from './NavigationBar';
//import { Container } from 'semantic-ui-react';

class IndexPage extends React.Component{
  
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>Welcome JHCIS GIS</h1>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   testDispatch: () => dispatch(testDispatch()),
//   fetchHomes: () => dispatch(fetchHomes())
// });

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-byULeVbrQcP3pJ4C9C_z53kL27EuSWw',
})(IndexPage);