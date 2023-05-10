import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import MerchantInfo from "../containers/ticketMerchantInfo";
import CategorySelect from "../containers/ticketCategorySelect";
import DepartmentSelect from "../containers/ticketDepartments";
import moment from "moment";

export default function Ticket() {
  const [ticket, setTicket] = useState<any>(0);
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [requestPending, setRequestPending] = useState(false)
  const [notes, setNotes] = useState<any>([])
  const merchantInfoRef = useRef<any>(null);
  const categoriesRef = useRef<any>(null)
  const departmentRef = useRef<any>(null)
  const [statusChange, setStatusChange] = useState<string>("")

  useEffect(() => {
    if (ticketId!=="new") {
      fetch(`/tickets/${ticketId}`)
        .then((response) => {
          if(response.status === 404) navigate('/404')
          return response.json()
        })
        .then((data) => {
          setTicket(data);
          setNotes(data.ticketBody?.notes)
          setStatusChange(data.ticketInfo?.ticketStatus)
        });
    }else{
      setTicket(0);
      setNotes([])
      setStatusChange("open")
      navigate('/tickets/new')
      
    }
    // eslint-disable-next-line
  }, [ticketId]);

  const createTicketHandler = (e) => {
    e.preventDefault();

    const merchantInfo = merchantInfoRef.current?.getData();
    const categories = categoriesRef.current?.getData();
    const department = departmentRef.current?.getData();
    const formData = new FormData(e.target);
    const jsonObject = {
      ticketStatus: statusChange,
      ticketBody: {
        notes:notes
      },
      ticketInfo: {
        createdDate: ticket.ticketInfo?.createdDate
      },
      ...department,
      ...categories,
      ...merchantInfo
    };

    console.log(jsonObject)

    for (const [key, value] of formData.entries()) {
      const keys = key.split("/");
      jsonObject[keys[0]][keys[1]] = value;
    }

    if(!ticket){
      setRequestPending(true)
      fetch("/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate(`/tickets/${data.ticketId}`);
          setRequestPending(false)
          console.log(data)
        }).catch(
          error => console.log(error)
        );
    }else{
      setRequestPending(true)
      fetch(`/tickets/${ticket.ticketId}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      }).then(
        response => response.json()
      ).then(
        data => {
          setTicket(data)
          setRequestPending(false)
          console.log(data)
        }
      ).catch(
        error => console.log(error)
      )
    }
  };

  const textareaRef = React.useRef<any>(null);

  function handleAddNote() {
    
    const noteText = textareaRef.current?.value;
    if(!noteText) return
    const noteObject = {
      text: noteText,
      addedBy: "Lukas Kondrotas",
      timestamp: new Date()
    }
    if(!ticket){
      setNotes((prevState)=>[...prevState, noteObject])
      textareaRef.current.value = ""
    }else{
      fetch(`/tickets/addnote/${ticketId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({notes:noteObject}),
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes([...notes, noteObject])
          setTicket(data)
          textareaRef.current.value = ""
        }).catch(
          error => console.log(error)
        );
    }
  }

  

  return (
    <Container fluid as={Form} onSubmit={createTicketHandler}>
      <Row>
        <MerchantInfo ref={merchantInfoRef} serial={ticket.merchant?.SN} reporterData={ticket?.reporter}/>
        <Col style={{ padding: "67px 0px 0px 0px" }}>
          <Container fluid>
            <Row className="overflow-auto pt-2" style={{ maxHeight: "92vh" }}>
              <Form.Group className="pt-3 rounded mb-5">
                <InputGroup className="mb-2">
                  <InputGroup.Text className="ig-width">
                    Subject
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Subject"
                    name="ticketBody/subject"
                    defaultValue={ticket.ticketBody?.subject}
                    required
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="ig-width">
                    Description
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    placeholder="Write description of the issue here..."
                    style={{ minHeight: "300px", maxHeight: "600px" }}
                    name="ticketBody/description"
                    defaultValue={ticket.ticketBody?.description}
                    required
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="ig-width">
                    Error message
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Error message"
                    name="ticketBody/errorMessage"
                    defaultValue={ticket.ticketBody?.errorMessage}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="ig-width">
                    Action plan
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    placeholder="Action plan"
                    style={{ minHeight: "70px", maxHeight: "200px" }}
                    name="ticketBody/actionPlan"
                    defaultValue={ticket.ticketBody?.actionPlan}
                  ></Form.Control>
                </InputGroup>
              </Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Text className="ig-width">
                  Solution
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  placeholder="Write solution how you fixed this issue..."
                  style={{ minHeight: "100px", maxHeight: "200px" }}
                  name="ticketBody/solution"
                  defaultValue={ticket.ticketBody?.solution}
                ></Form.Control>
              </InputGroup>
              <Form.Text><b>Notes</b></Form.Text>
              <ul>
                {notes ? notes.map((note, i)=>{
                  return note ? <><Form.Text key={i}>{note.addedBy + " · " + moment(note.timestamp).format("YYYY-MM-DD h:mmA")}</Form.Text>
                    <p
                      className="border-0 border-bottom rounded-0 pb-2"
                    >{note.text}</p>
                  </> : ""
                }) : ""}
              </ul>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    style={{ minHeight: "150px" }}
                    ref={textareaRef}
                  ></Form.Control>
                  <Button onClick={handleAddNote}>Add Note</Button>
                </InputGroup>
              </Form.Group>
            </Row>
          </Container>
        </Col>
        <Col xl={2} xs={3} className="vh-100 bg-secondary shadow-sm">
          <div style={{ height: "80px" }}></div>
          <h5>{`#${ticket ? ticket.ticketId : " New ticket"}`}</h5>
          <Form.Group className="mb-2">
            <Form.Group>
              <InputGroup className="mb-1">
                <InputGroup.Text
                  className={
                    statusChange === "open" ? "ig-width-side border-danger bg-danger"
                      : statusChange === "resolved" ? "ig-width-side border-success bg-success"
                      : statusChange === "waiting" ? "ig-width-side border-warning bg-warning" : "ig-width-side"
                  }
                >
                  Status
                </InputGroup.Text>
                <Form.Control className={
                      statusChange === "open" ? "border-danger"
                        : statusChange === "resolved" ? "border-success"
                        : statusChange === "waiting" ? "border-warning" : ""
                    } 
                    as="select"
                    name="ticketInfo/ticketStatus"
                    value={statusChange}
                    onChange={(e)=>setStatusChange(e.target.value)}
                  >
                  <option value="open">Open</option>
                  <option value="resolved">Resolved</option>
                  <option value="waiting">Waiting for customer</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
            <Form.Text style={{ color: "#fff" }}>
              Ticket Information
            </Form.Text>
            <InputGroup className="mb-1">
              <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                Created
              </InputGroup.Text>
              <Form.Control defaultValue={ticket!==0 ? moment(ticket.ticketInfo?.createdDate).format("YYYY-MM-DD h:mmA") : ""} readOnly></Form.Control>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                Updated
              </InputGroup.Text>
              <Form.Control defaultValue={ticket!==0 ? moment(ticket.ticketInfo?.updatedDate).format("YYYY-MM-DD h:mmA") : ""} readOnly></Form.Control>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text className="ig-width-side p-1" style={{fontSize: "12px"}}>
                Source
              </InputGroup.Text>
              <Form.Control as="select" name="ticketInfo/source" defaultValue={ticket.ticketInfo?.source}>
                <option>Phone</option>
                <option>Chat</option>
                <option>Email</option>
              </Form.Control>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <DepartmentSelect ref={departmentRef} savedDepartments={ticket?.departmentInfo} />
          </Form.Group>

          {/* Problem categories */}
          <Form.Group className="mb-5">
            <CategorySelect ref={categoriesRef} savedCategories={ticket?.categories}/>
          </Form.Group>
          <Button type="submit" className="col-12 btn-lg">
            {ticket ? requestPending ? "Saving..." : "Save Ticket" : requestPending ? "Saving..." : "Create Ticket"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}