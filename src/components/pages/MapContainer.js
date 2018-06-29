import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
//import { Container } from 'semantic-ui-react';
import { getAllhouse, testDispatch } from '../../actions/homeAction';
import { getAllVillage } from '../../actions/villageAction';

class MapContainer extends Component {

  componentDidMount() {
    this.props.getAllhouse();
    this.props.getAllVillage();
  }

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const center = { ygis: '17.234283', xgis: '98.236294' };
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const { data } = this.props;
      const raw_data = data.filter(d => d.xgis !== null && d.ygis !== null && d.xgis !== "" && d.ygis !== "");
      let f_home = {};
      raw_data.length > 0 ? f_home = raw_data[0] : f_home = center;
      console.log(raw_data);
      console.log(f_home);

      const mapConfig = Object.assign({}, {
        center: { lat: f_home.ygis * 1, lng: f_home.xgis * 1 }, // sets center of google map to NYC.
        zoom: 14, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.


      // ==================
      // ADD MARKERS TO MAP
      // ==================
      if (raw_data.length > 0) {
        raw_data.forEach(location => { // iterate through locations saved in state
          new google.maps.Marker({ // creates a new Google maps Marker object.
            position: { lat: location.ygis * 1, lng: location.xgis * 1 }, // sets position of marker to specified location
            map: this.map, // sets markers to appear on the map we just created on line 35
            title: 'บ้านเลขที่ : ' + location.hno // the title of the marker is set to the name of the location
          });
        })
      }
    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh', // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
      marginTop: '8em'
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.homes.data
  }
}

const mapDispatchToProps = dispatch => ({
  testDispatch: () => dispatch(testDispatch()),
  getAllhouse: () => dispatch(getAllhouse()),
  getAllVillage: () => dispatch(getAllVillage())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);