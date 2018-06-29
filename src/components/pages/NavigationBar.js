import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

class NavigationBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        const { isAuthenticated, logout } = this.props;

        return (
            <Menu secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    { isAuthenticated ?
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={ () => logout() }
                    />
                    : 
                    <Link to="/login">
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                        />
                    </Link> }
                </Menu.Menu>
            </Menu>
        )
    }
};

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout })(NavigationBar);
