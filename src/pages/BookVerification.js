import { Container, Table } from "react-bootstrap"
import React from 'react'
import ceklis from "../../src/assets/ceklis.png"

const BookVerification =()=>{
    return(
        <>
        <div className="bg-white">
            <Container>
                <h3 className="my-3">Book verification</h3>
            <Table striped>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>User Or Author</th>
                    <th>ISBN</th>
                    <th>Literatur</th>
                    <th>Action</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Randal Munroe</td>
                    <td>97817898075554</td>
                    <td>what if ? absurd Question.pdf</td>
                    <td>Approve</td>
                    <td>
                        <img src={ceklis} alt=""/>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Approve</td>
                    <td>
                        <img src={ceklis} alt=""/>
                    </td>
                    </tr>
                </tbody>
            </Table>
            </Container>

        </div>
        </>
    )
}

export default BookVerification