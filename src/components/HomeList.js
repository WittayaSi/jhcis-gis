import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import { Form, Label, Dropdown, Divider } from 'semantic-ui-react';

class HomeList extends React.Component{

    handleChange = (e, { value }) => this.setState({ value })

    render(){
        // const options = [
        //     { key: 'm', text: 'Male', value: 'male' },
        //     { key: 'f', text: 'Female', value: 'female' },
        // ]
        const { error, loading, data, villages } = this.props;

        const vill_options = villages.map(v => {
            return {
                key: v.villcode,
                text: '( ' + v.villno + ' ) ' + v.villname,
                value: v.villcode
            }
        });
        
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
                            <Dropdown 
                                placeholder='เลือกหมู่...' 
                                selection 
                                options={vill_options}
                                value={this.props.currentv.villcode}
                                onChange={ this.handleChange }
                            />
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
        error: state.homeReducer.error,
        villages: state.villageReducer.villages,
        currentv: state.villageReducer.currentv
    }
}

export default connect(mapStateToProps)(HomeList);