import React from 'react'
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

import btseacrh from "../assets/btseacrh.svg"

import fakepdf from "../assets/fakePdf.png"
import AllNavbar from '../components/AllNavbar'
import { dataJurnal } from '../dummyData/dataJurnal'

function SearchResult() {
  return (
    <>
        <AllNavbar/>
        <div className='bg-black profile-page'>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-7">
                        <div className="d-flex">
                            <InputGroup className="mb-3 me-3">
                                <Form.Control
                                type="text"
                                placeholder="Search for literatur"
                                className=""
                                />
                            </InputGroup>
                            <div>
                                <img src={btseacrh} alt="" style={{width:"40px", position: "absolute", buttom: "75px"}}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-lg-2">
                        <h5 className='text-danger mb-2'>Anytime</h5>
                        <Form.Select aria-label="Default select example">
                            <option>Since Tahun</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col className="mt-3">
                        <Row>

                        {dataJurnal.map((item, index)=>(
                            <Col key={index}>
                                <div  className='card-sr'>
                            <img alt="" src={fakepdf}/>
                            <div className='mt-3 text-white ms-2'>
                                <h4>
                                    {item.title}
                                </h4>
                            </div>
                            <div className='d-flex justify-content-between mt-1 text-white ms-2' style={{width:"50%"}}>
                                <p>{item.penulis}</p>
                                <p>{item.tahun}</p>
                            </div>
                        </div>
                            </Col>
                        ))}

                        </Row>
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default SearchResult