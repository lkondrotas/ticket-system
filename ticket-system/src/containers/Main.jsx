import React from 'react';
import {Col} from 'react-bootstrap';

class Main extends React.Component {

    state = {
        colSize: 9
    }

    render() { 
        return (
            <Col xs={this.state.colSize} className="vh-100">
                <br></br>
                <br></br>
                <br></br>
            </Col>
        );
    }
}
 
export default Main;