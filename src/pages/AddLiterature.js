import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import AllNavbar from "../components/AllNavbar"

const AddLiterature =()=> {
    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
                <h2 className="text-white mb-4">Add Literature</h2>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Title" 
                                className="bg-grayinput rounded-0"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" placeholder="Date"
                                className="bg-grayinput rounded-0" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Pages"
                                className="bg-grayinput rounded-0"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="ISBN" 
                                className="bg-grayinput rounded-0"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Author"
                                className="bg-grayinput rounded-0"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail"
                            style={{width:"25%"}}
                            >
                                <Form.Control type="file" placeholder="File"
                                className="bg-grayinput rounded-0" />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="danger" type="submit" className="bg-maroon rounded-0" style={{width:"30%", borderRadius:"5"}}>
                                    Submit
                                </Button>
                            </div>
                                
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default AddLiterature