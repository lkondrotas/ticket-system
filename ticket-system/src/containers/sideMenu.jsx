import {Col, Button} from 'react-bootstrap';
import React from 'react';
import '../css/nav.css'
import arrow from '../images/arrow.svg';

class SideMenu extends React.Component {
    render() { 
     return (
         <Col xs={3} className="vh-100 bg-secondary colExpHov">
             <br></br>
             <br></br>
             <br></br>
             <div className="colExp"><img src={arrow} className="center" /></div>
         </Col>
     );
    }
}
 
export default SideMenu;
