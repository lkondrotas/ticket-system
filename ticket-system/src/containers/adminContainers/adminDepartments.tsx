import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"

const AdminDepartments = () => {
    const [departments, setDepartments] = useState<any>(0)

    useEffect(()=>{
        fetch("/departments")
            .then(response => response.json())
            .then(data => setDepartments(data))
    },[])

    const addDepartment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const jsonObject = {
            value: "",
            label: ""
        }

        for (const [key, value] of formData.entries()) {
            jsonObject[key] = value;
        }

        jsonObject.value = jsonObject.label.toLocaleLowerCase().replaceAll(" ", "")

        console.log(jsonObject)

        fetch('/departments',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonObject),
        }).then(response => response.json())
            .then(data=>{setDepartments([...departments, data]); console.log(data)})
    }

    const addBranch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const jsonObject = {
            value: "",
            label: ""
        }
        let targetName;

        for (const [key, value] of formData.entries()) {
            if(key==="targetName") targetName=value
            else jsonObject[key] = value;
        }

        jsonObject.value = jsonObject.label.toLocaleLowerCase().replaceAll(" ", "")

        fetch(`/departments/addbranch/${targetName}`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({branch: jsonObject}),
        }).then(response => response.json())
            .then(data=> console.log(data))
    }

    return (
            <Row>
                <Col xl={3} className="py-2">
                </Col>


                <Col xl={3} className="py-2">
                    <InputGroup as={Form} onSubmit={addDepartment}>
                        <Button type="submit">Add</Button>
                        <Form.Control name="label" placeholder="Name"></Form.Control>
                    </InputGroup>
                    {departments ? departments.map((item,i)=>{
                        return <Button key={i} value={item.value} className="btn-light w-100 mt-1 rounded-0">{item.label}</Button>
                    }) : ""}
                </Col>



                <Col xl={3} className="py-2">
                    <InputGroup as={Form} onSubmit={addBranch}>
                        <Button type="submit">Add</Button>
                        <Form.Control name="label" placeholder="Name"></Form.Control>
                        <Form.Control name="targetName" as="select">
                            {departments ? departments.map((item, i)=>{
                                return <option value={item.value}>{item.label}</option>
                            }): ""}
                        </Form.Control>
                    </InputGroup>
                    {departments ? departments.map((item,i)=>{
                        return item.branch.map((item2,j)=>{
                        return <Button key={j+i} value={item2.value} className="btn-light w-100 mt-1 rounded-0">{item2.label}</Button>
                    })}) : ""}
                </Col>
                <Col xl={3} className="py-2">
                </Col>
            </Row>
    )
}

export default AdminDepartments;
