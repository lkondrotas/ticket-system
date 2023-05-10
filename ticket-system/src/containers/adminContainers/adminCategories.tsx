import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"

const AdminCategories = () => {
    const [requestType, setRequestType] = useState<any>(0)
    const [product, setproduct] = useState<any>(0)
    const [category, setcategory] = useState<any>(0)
    const [subcategory, setsubcategory] = useState<any>(0)

    useEffect(()=>{
        fetch("/categories/1")
            .then(response => response.json())
            .then(data => setRequestType(data))

        fetch("/categories/2")
            .then(response => response.json())
            .then(data => setproduct(data))

        fetch("/categories/3")
            .then(response => response.json())
            .then(data => setcategory(data))

        fetch("/categories/4")
            .then(response => response.json())
            .then(data => setsubcategory(data))
    },[])

    const addProduct = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const jsonObject = {
            type:"",
            value: "",
            label: ""
        }

        for (const [key, value] of formData.entries()) {
            jsonObject[key] = value;
        }

        jsonObject.value = jsonObject.value + "/" + jsonObject.label.toLocaleLowerCase().replaceAll(" ", "")

        console.log(jsonObject)

        fetch('/categories',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonObject),
        }).then(response => response.json())
            .then(data=> jsonObject.type==="1" ? setRequestType([...requestType, data]) : jsonObject.type==="2" ? setproduct([...product,data]) : jsonObject.type==="3" ? setcategory([...category,data]) : jsonObject.type==="4" ? setsubcategory([...subcategory,data]) : "")
    }

    const onClickHandler = (e) => {
        const value1 = e.target.value;
        const value2 = e.target.innerHTML;

        e.target.value = value2
        e.target.innerHTML = value1
    }

    return (
            <Row>
                <Col xl={3} className="py-2">
                <InputGroup as={Form} onSubmit={addProduct}>
                        <Button type="submit">Add</Button>
                        <Form.Control name="label" placeholder="Name"></Form.Control>
                        <Form.Control name="type" value="1" hidden></Form.Control>
                        <Form.Control name="value" value="" hidden></Form.Control>
                    </InputGroup>
                    {requestType ? requestType.map((item,i)=>{
                        return <Button onClick={onClickHandler} key={i} value={item.value} className="btn-light w-100 mt-1 rounded-0">{item.label}</Button>
                    }) : ""}
                </Col>
                <Col xl={3} className="py-2">
                    <InputGroup as={Form} onSubmit={addProduct}>
                        <Button type="submit">Add</Button>
                        <Form.Control name="label" placeholder="Name"></Form.Control>
                        <Form.Control name="type" value="2" hidden></Form.Control>
                        <Form.Control name="value" as="select">
                            {requestType ? requestType.map((item, i)=>{
                                return <option value={item.value.split("/")[1]}>{item.label}</option>
                            }): ""}
                        </Form.Control>
                    </InputGroup>
                    {product ? product.map((item,i)=>{
                        return <Button onClick={onClickHandler} key={i} value={item.value} className="btn-light w-100 mt-1 rounded-0">{item.label}</Button>
                    }) : ""}
                </Col>
                <Col xl={3} className="py-2">
                    <InputGroup as={Form} onSubmit={addProduct}>
                        <Button type="submit">Add</Button>
                        <Form.Control name="label" placeholder="Name"></Form.Control>
                        <Form.Control name="type" value="3" hidden></Form.Control>
                        <Form.Control name="value" as="select">
                            {product ? product.map((item, i)=>{
                                return <option value={item.value.split("/")[1]}>{item.label}</option>
                            }): ""}
                        </Form.Control>
                    </InputGroup>
                    {category ? category.map((item,i)=>{
                        return <Button onClick={onClickHandler} key={i} value={item.value} className="btn-light w-100 mt-1 rounded-0">{item.label}</Button>
                    }) : ""}
                </Col>
                <Col xl={3} className="py-2">
                    <InputGroup as={Form} onSubmit={addProduct}>
                        <Button type="submit">Add</Button>
                        <Form.Control name="label" placeholder="Name"></Form.Control>
                        <Form.Control name="type" value="4" hidden></Form.Control>
                        <Form.Control name="value" as="select">
                            {category ? category.map((item, i)=>{
                                return <option value={item.value.split("/")[1]}>{item.label}</option>
                            }): ""}
                        </Form.Control>
                    </InputGroup>
                    {subcategory ? subcategory.map((item,i)=>{
                        return <Button onClick={onClickHandler} key={i} value={item.value} className="btn-light w-100 mt-1 rounded-0">{item.label}</Button>
                    }) : ""}
                </Col>
            </Row>
    )
}

export default AdminCategories;
