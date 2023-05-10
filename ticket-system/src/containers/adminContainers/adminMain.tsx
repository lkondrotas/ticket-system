import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import AdminCategories from "./adminCategories"
import AdminDepartments from "./adminDepartments"
import AdminUsers from "./adminUsers"
import AdminMerchant from "./adminMerchants"

const Adminpage = () => {
    // eslint-disable-next-line
    const components = [<AdminCategories />, <AdminDepartments />, <AdminUsers />, <AdminMerchant />]
    const [pageComponent, setComponent] = useState<any>(components[0])

    const clickHandler = (value) =>{
        setComponent(components[value.target.value])
    }

    return (
        <Container fluid>
            <Row>
                <Col id="sideMenu" xs={2} className="vh-100 bg-secondary" style={{ paddingTop: "75px" }}>
                    <Button onClick={clickHandler} value="0" className="w-100 rounded-0 btn-secondary">Manage Categories</Button>
                    <Button onClick={clickHandler} value="1" className="w-100 rounded-0 btn-secondary">Manage Departments</Button>
                    {/* <Button onClick={clickHandler} value="2" className="w-100 rounded-0 btn-secondary">Manage Users</Button>
                    <Button onClick={clickHandler} value="3" className="w-100 rounded-0 btn-secondary">Manage Merchants</Button> */}
                </Col>
                <Col style={{ paddingTop: "66px" }} className="overflow-auto">
                    {pageComponent}
                </Col>
            </Row>
        </Container>
    )
}

export default Adminpage;
