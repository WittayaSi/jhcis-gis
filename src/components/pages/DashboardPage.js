import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import HomeList from './HomeList';
import MapContainer from './MapContainer';
import NavigationBar from './NavigationBar';

class DashboarPage extends React.Component{
  
  render() {
    const { location } = this.props;
    return (
      <div>
        <NavigationBar location={location} />
        {this.props.children}
        <div className="ui grid">
          <div className="six wide column"> 
            <HomeList />
          </div>
          <div className="ten wide column"> 
            <MapContainer google={this.props.google} />
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-byULeVbrQcP3pJ4C9C_z53kL27EuSWw',
})(DashboarPage);