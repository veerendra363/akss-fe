import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contactUS.css'
import ContactUsForm from './ContactUsForm';


function ContactUS() {
  return (
    <div className='card-container'>
    <h2 className='contactus-heading'>ContactUS</h2>
    <Container>
      <Row>
        <Col>
            <ContactUsForm />
        </Col>
        <Col>
            <h4>Email</h4>
            <p>akss@gmail.com</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ContactUS