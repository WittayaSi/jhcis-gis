import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HomeList extends React.Component{
    render(){
        const { error, loading, data } = this.props;
    
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div className={loading ? 'ui active loader' : ''}></div>;
        }
        
        return(
            <ul>
                {
                    data.map(
                        d=><li key={d.hcode}>{d.hno} - xgis : {d.xgis} - ygis : {d.ygis}</li>
                    )
                }
            </ul>
        )
    }
};

const mapStateToProps = state => {
    return {
        data: state.homeReducer.data,
        loading: state.homeReducer.loading,
        error: state.homeReducer.error
    }
}

export default connect(mapStateToProps)(HomeList);