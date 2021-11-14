import {Col, Button, Collapse} from 'react-bootstrap';
import React from 'react';
import '../css/nav.css'
import arrow from '../images/arrow.svg';

class SideMenu extends React.Component {
    state = {
        open: true
    }


    render() { 
     return (
         <Collapse in={this.state.open} aria-controls="sideMenu" aria-expanded={this.state.open} dimension="width">
         <Col xs={3} id="sideMenu" className="vh-100 bg-secondary colExpHov">
             <br></br>
             <br></br>
             <br></br>
             <div onClick={() => this.setState({open: !this.state.open})} className="colExp"><img src={arrow} className="center" /></div>
         </Col>
         </Collapse>
     );
    }
}
 
export default SideMenu;
