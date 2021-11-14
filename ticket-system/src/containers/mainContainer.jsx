import {Container, Row} from 'react-bootstrap';
import SideMenu from './sideMenu';
import CollapsedSideMenu from './CollapsedSideMenu';
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
                    {this.state.data}
                    {/* <Button onClick={this.state.isCollapsed ? this.expand : this.collapse }>Test</Button> to collapse and expand */}
                </Row>
            </Container>
        );
    }

    collapse = () =>{
        this.setState({isCollapsed: true, data: <SideMenu />})
    }
    expand = () =>{
        this.setState({isCollapsed: false, data: <CollapsedSideMenu />})
    }

}
 
export default MainContainer;
