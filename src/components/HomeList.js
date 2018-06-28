import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import { Form, Label, Dropdown, Divider } from 'semantic-ui-react';

class HomeList extends React.Component{
    render(){
        const options = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
        ]
        const { error, loading, data } = this.props;
        const style = {
            maxHeight: '75vh', 
            overflow: 'auto'
        }
        
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        return(
            <div style={{ marginTop: '5em' }}>
                <div>
                    <Form style={{ textAlign: 'center' }}>
                        <Form.Field inline>
                            <Label pointing='right'>หมู่ที่ : </Label>
                            <Dropdown placeholder='เลือกหมู่...' search selection options={options}/>
                        </Form.Field>
                    </Form>
                </div>
                <Divider/>
                <div className={loading ? 'ui active loader' : ''}></div>
                <div style={style}>
                    { data.map(d => <Home key={d.hcode} home={d}/>) }
                </div>
            </div>
        )
    }
};

HomeList.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

const mapStateToProps = state => {
    return {
        data: state.homeReducer.data,
        loading: state.homeReducer.loading,
        error: state.homeReducer.error
    }
}

export default connect(mapStateToProps)(HomeList);