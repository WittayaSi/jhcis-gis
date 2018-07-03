import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Container } from 'semantic-ui-react'
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


class NavigationBar extends Component {
    state = { activeItem: 'home'};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        const { isAuthenticated, logout, location } = this.props;

        return (
            <Menu fixed='top'>
                <Container>
                    {
                        location.pathname !== "/" 
                        && 
                        <Menu.Item 
                            name='home' 
                            active={activeItem === 'home'} 
                            onClick={this.handleItemClick} 
                            href="/"
                        >
                            <Icon name='home' size="large" style={{ margin: '0 0 0 0'}}/>
                        </Menu.Item>
                    }
                    
                    {/* <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    /> */}
                    <Menu.Menu position='right'>
                        { isAuthenticated ?
                        <Dropdown item text={ 'ชื่อผู้ใช้ : ' + atob(localStorage.jhcisgisUSR)}>
                            <Dropdown.Menu>
                                <Dropdown.Item icon='user' text='Profile' />
                                <Dropdown.Item icon='sign out' text='Sign Out' onClick={ () => logout() } />
                            </Dropdown.Menu>
                        </Dropdown>
                        // <Menu.Item
                        //     name='logout'
                        //     active={activeItem === 'logout'}
                        //     onClick={ () => logout() }
                        // />
                        : 
                        <Dropdown item icon="settings">
                            <Dropdown.Menu>
                                <Dropdown.Item icon='setting' text='Connection'
                                    onClick={this.props.onClickModal}
                                />
                                <Dropdown.Item icon='sign in' text='Sign In' href="/login" />
                            </Dropdown.Menu>
                        </Dropdown>
                        // <Menu.Item
                        //     name='sign-in'
                        //     active={activeItem === 'sign-in'}
                        //     onClick={this.handleItemClick}
                        //     href="/login"
                        // >
                        //     <Icon name='settings' size="large" style={{ margin: '0 0 0 0'}}/>
                        //</Menu.Item> 
                        }
                    </Menu.Menu>
                </Container>
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
