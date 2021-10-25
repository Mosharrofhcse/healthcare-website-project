import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import patient1 from '../../../images/patients/patient-1.jpg'
import patient2 from '../../../images/patients/patient-2.jpg'

const Clients = () => {
    return (
        <div id="patients" className="mb-5">
            <h1 className="my-5">PATIENTS <span className="text-warning">SAY ABOUT US</span></h1>
            <Row>
                <Col><Card>
                    {/* <Card.Img variant="left" style={{ width: '20%' }} src={patient1} /> */}

                    <Card.Body>
                        <Image style={{ width: '50%' }} src={patient1} roundedCircle />
                        <Card.Title>Mary Smith</Card.Title>
                        <Card.Text>
                            I felt very comfortable and reassured throughout my stay. The staff were great, answering any questions I had and took good care of me at each stage.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col><Card>
                    {/* <Card.Img variant="left" src={patient2} /> */}
                    <Card.Body>
                        <Image style={{ width: '50%' }} src={patient2} roundedCircle />
                        <Card.Title>Julia Bhatt</Card.Title>
                        <Card.Text>
                            From start to finish, treated with respect and courtesy. Mr Kosuge explained everything in detail. All staff friendly and professional. I would recommend this hospital.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
            </Row>

        </div>
    );
};

export default Clients;