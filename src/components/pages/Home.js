import React from 'react';
import { Segment, Button, Grid } from 'semantic-ui-react';

const Home = props => {
    //console.log(props.home);
    const { home } = props
    const status = (home.xgis===null || home.xgis===null || home.xgis==="" || home.xgis==="");
    return(
            <Segment style={{ padding: '.25em 1em .25em 1em' }} 
                clearing
                color={ status ? 'red' : 'green'}>
                <Grid columns={1}>
                    <Grid.Column verticalAlign='middle'>
                        รหัสบ้าน: {home.hcode} , บ้านเลขที่: {home.hno}
                        <Button.Group floated='right' size='small' >
                            <Button color='yellow' icon='edit' />
                            { !status && <Button color='green' icon='eye' /> }
                        </Button.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
    )
}

export default Home;