import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import { Form, Label, Dropdown, Divider, Message } from 'semantic-ui-react';

import { setCurrentV } from '../../actions/villageAction';

class HomeList extends React.Component{

    onChange = (e, data) => {
        const v = data.options.filter(d => d.key === data.value);
        this.props.setCurrentV(v[0]);
    }

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
            <div style={{ marginTop: '3em' }}>

                <div className={loading ? 'ui active loader' : ''}></div>

                <div>
                    <Form style={{ textAlign: 'center' }}>
                        <Form.Field inline>
                            <Label pointing='right'>(หมู่ที่)บ้าน : </Label>
                            <Dropdown 
                                placeholder='เลือกหมู่...' 
                                selection 
                                options={vill_options}
                                value={this.props.currentv.key}
                                onChange={ this.onChange }
                            />
                        </Form.Field>
                    </Form>
                </div>
                <Divider/>
                <div style={style}>
                    { 
                        !loading && (
                            data.length !== 0 ? 
                            data.map(d => <Home key={d.hcode} home={d}/>) : 
                            <Message negative style={{ textAlign: 'center' }}>No Results</Message> 
                        )
                    }
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
        data: state.homes.data,
        loading: state.homes.loading,
        error: state.homes.error,
        villages: state.villages.villages,
        currentv: state.villages.currentv
    }
}

export default connect(mapStateToProps, { setCurrentV })(HomeList);