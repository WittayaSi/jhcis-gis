import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Grid } from 'semantic-ui-react';

import NavigationBar from './NavigationBar';
import ConnectionModal from './modals/ConnectionModal';

class IndexPage extends React.Component {

  state = { visible: false, size: 'tiny' };

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
    //console.log(location);
    const { location } = this.props;
    const { size, visible } = this.state;
    console.log(process.env.GOOGLE_MAP_API_KEY);
    return (

      <div>
        <NavigationBar
          location={location}
          onClickModal={() => this.openModal()}
        />

        <ConnectionModal
          modalOnOpen={() => this.openModal()}
          modalOnClose={() => this.closeModal()}
          modalSize={size}
          modalVisible={visible}
        />

        <Grid textAlign='center' style={{ height: '100vh', alignItems: 'center' }}>
          <h1>Welcome to JHCIS GIS</h1>
        </Grid>
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