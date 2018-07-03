import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Message, Grid, Header, Segment } from 'semantic-ui-react';

import InlineError from '../messages/InlineError';

class LoginForm extends Component {
    state = {
        data: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        // if don't have an errors submit to server
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
        }
    };

    validate = (data) => {
        const errors = {};
        // validate data =>  username and password
        // if want to validate email use Validator => isEmail(email) 
        if (!data.username) errors.username = "Can't be blank.";
        if (!data.password) errors.password = "Can't be blank.";

        return errors;
    }

    render() {
        const { data, errors, loading } = this.state;
        return (
            <div className="login-form">
                <style>
                    {`
                        body > div,
                        body > div > div,
                        body > div > div > div.login-form {
                            height: 100%;
                        }
                    `}
                </style>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {/* <Image src='/logo.png' />  */}
                            Sign-in for JHCIS-GIS
                        </Header>
                        <Form onSubmit={this.onSubmit} loading={loading} size='large'>
                            <Segment stacked>
                                {errors.global &&
                                    <Message negative>
                                        <Message.Header>Something went wrong!</Message.Header>
                                        <p> {errors.global} </p>
                                    </Message>
                                }
                                <Form.Field error={!!errors.username}>
                                    <p style={{ textAlign: 'left' }}>{errors.username && <InlineError text={errors.username} />}</p>
                                    {/* <label htmlFor="username">Username</label> */}
                                    <input type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={data.username}
                                        onChange={this.onChange}
                                    />
                                    
                                </Form.Field>
                                <Form.Field error={!!errors.password}>
                                    <p style={{ textAlign: 'left' }}>{errors.password && <InlineError text={errors.password} />}</p>
                                    {/* <label htmlFor="password">Password</label> */}
                                    <input type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={this.onChange}
                                    />
                                    
                                </Form.Field>
                                <Button color='teal' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        {/* <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message> */}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;