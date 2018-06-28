import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';


import HomeList from './HomeList';
import MapContainer from './MapContainer';
import { Container } from 'semantic-ui-react';

class App extends React.Component{
  
  render() {
    return (
      <Container>
        <div className="ui grid">
          <div className="six wide column"> 
            <HomeList />
          </div>
          <div className="ten wide column"> 
            <MapContainer google={this.props.google} />
          </div>
          {/* <Button onClick={() => this.props.testDispatch()} content="TEST CLICK DISPATCH" primary /> */}
        </div>
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   testDispatch: () => dispatch(testDispatch()),
//   fetchHomes: () => dispatch(fetchHomes())
// });

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-byULeVbrQcP3pJ4C9C_z53kL27EuSWw',
})(App);