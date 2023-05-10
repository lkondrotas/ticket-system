import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Select from "react-select"

const DepartmentSelect = forwardRef((props: any, ref) => {

    const [departments, setDepartments] = useState<any>()
    const [selected, setSelected] = useState<any>()
    const [users, setUsers] = useState<any>()
    const { savedDepartments } = props

    useEffect(() => {
        fetch(`/departments`)
            .then(response => response.json())
            .then(data => setDepartments(data))

        fetch('/users/allusers')
            .then(response=>response.json())
            .then(data=>{
                setUsers(data)
                setSelected({...selected, reporter: data[0]})
            })
            // eslint-disable-next-line
    },[])

    useEffect(()=>{
        setSelected(savedDepartments)
    },[savedDepartments])

    // TODO: Add support for existing ticket (displaying existing data to fields)

    // LATER USE

    

    useImperativeHandle(ref, () => ({
        getData: () => {
            console.log(selected)
          return { departmentInfo: selected };
        },
    }));

    return (
        <React.Fragment>
            <Form.Text style={{ color: "#fff" }}>Department and Asignee</Form.Text>
            <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Created By
                </InputGroup.Text>
                <Form.Control
                    value={selected?.reporter.firstName + " " + selected?.reporter.lastName}
                    disabled
                />
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Department
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={departments}
                    onChange={(e)=>{setSelected({...selected, department:e})}}
                    value={selected?.department}
                    className="p-0"
                />
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Branch
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={selected?.department?.branch}
                    onChange={(e)=>setSelected({...selected, branch:e})}
                    value={selected?.branch}
                    className="p-0"
                />
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                    Asignee
                </InputGroup.Text>
                <Form.Control as={Select}
                    options={users}
                    getOptionLabel={e=>`${e.firstName} ${e.lastName}`}
                    getOptionValue={e=>e._id}
                    onChange={(e)=>setSelected({...selected,asignee: e})}
                    value={selected?.asignee}
                    className="p-0"
                />
            </InputGroup>
        </React.Fragment>
    )
})

export default DepartmentSelect;