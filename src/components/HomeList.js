import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HomeList = (homes) => (
    <ul>
        {homes}
    </ul>
);

// const mapStateToProps = state => {
//     homes: state.homes
// }

export default HomeList;