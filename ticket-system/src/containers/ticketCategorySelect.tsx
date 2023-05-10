import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Select from "react-select"

const CategorySelect = forwardRef((props: any, ref) => {

    const [categories, setCategories] = useState<any>()
    const [selected, setSelected] = useState<any>()
    const { savedCategories } = props
    const categoryNames = ["", "requestType", "product", "category", "subCategory"]

    useEffect(() => {
        fetch(`/categories/1`)
            .then(response => response.json())
            .then(data => setCategories({requestType:data}))
    },[])

    useEffect(()=>{
        setSelected(savedCategories)
    },[savedCategories])

    const loadNext=(value)=>{
        changeOptions(value)
        setSelected({...selected, [categoryNames[Number(value.type)]]:value})
        fetch(`/categories/${Number(value.type)+1}/${value.value.split("/")[1]}`)
            .then(response=>response.json())
            .then(data=>setCategories({...categories, [categoryNames[Number(value.type)+1]]:data}))

    }

    const changeOptions = (value) => {
        let adjSelected = selected
        if(selected){
            if(value?._id !== selected[categoryNames[Number(value.type)]]?._id){
                for(let i = Number(value.type)+1; i<5; i++){
                    adjSelected[categoryNames[i]] = ""
                }
                setSelected(adjSelected)
            }
        }
    }

    useImperativeHandle(ref, () => ({
        getData: () => {
          return { categories: selected };
        },
    }));

    return (
        <React.Fragment>
            <Form.Text style={{ color: "#fff" }}>Problem category</Form.Text>
            <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Product
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={categories?.requestType}
                    onChange={loadNext}
                    value={selected?.requestType}
                    className="p-0"
                />
            </InputGroup>
            <InputGroup className="mb-1" hidden={!selected?.requestType}>
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Product
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={categories?.product}
                    onChange={loadNext}
                    value={selected?.product}
                    className="p-0"
                />
            </InputGroup>
            <InputGroup className="mb-1" hidden={!selected?.product}>
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Category
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={categories?.category}
                    onChange={loadNext}
                    value={selected?.category}
                    className="p-0"
                />
            </InputGroup>
            <InputGroup className="mb-1" hidden={!selected?.category}>
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Subcategory
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={categories?.subCategory}
                    onChange={loadNext}
                    value={selected?.subCategory}
                    className="p-0"
                />
            </InputGroup>
        </React.Fragment>
    )
})

export default CategorySelect;