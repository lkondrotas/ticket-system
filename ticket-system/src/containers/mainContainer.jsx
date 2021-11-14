import {Container, Row, Button, Collapse} from 'react-bootstrap';
import SideMenu from './sideMenu';
import CollapsedSideMenu from './CollapsedSideMenu';
import Main from './Main';
import React from 'react';


class MainContainer extends React.Component {
    state = {
        isCollapsed: true,
        data: <SideMenu />
    };

    render() {
        return( 
            <Container fluid>
                <Row bg="dark">
                    <SideMenu />
                    <Main />
                    {/* <Button onClick={this.state.isCollapsed ? this.expand : this.collapse }>Test</Button> */}
                </Row>
            </Container>
        );
    }
}
 
export default MainContainer;
