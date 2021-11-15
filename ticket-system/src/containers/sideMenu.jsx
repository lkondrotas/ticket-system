import {Col, Button, Collapse, Row} from 'react-bootstrap';
import React from 'react';
import '../css/nav.css'
import arrow from '../images/arrow.svg';

class SideMenu extends React.Component {
    state = {
        open: true,
        openBar: false,
    }


    render() { 
     return (
        <React.Fragment>
         <Collapse onExiting={() => this.setState({openBar: true})} onEntered={() => this.setState({openBar: false})} in={this.state.open} aria-controls="sideMenu" aria-expanded={this.state.open} dimension="width">
         <Col xs={3} id="sideMenu" className="vh-100 bg-secondary colExpHov">
             <Row>
             <Col>
                 Test
             </Col>
             <Col xs="1">
             <a href="#"><div onClick={() => this.setState({open: false})} className="colExp"><img src={arrow} className="center" /></div></a>
            </Col>
            </Row>
         </Col>
         </Collapse>
         <div className="sideBar" style={{transform: this.state.openBar ? "scaleX(1)" : "scaleX(0)"}}>
             <br></br>
             <br></br>
             <br></br>
             <Button onClick={() => this.setState({open: true})}></Button>
         </div>
         </React.Fragment>
     );
    }
}
 
export default SideMenu;
