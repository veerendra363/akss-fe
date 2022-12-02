import React from 'react';
import { Formik, Field, Form } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contactUsForm.css'

const ContactUsForm = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        phoneNumber: '',
        location: '',
        email: '',
        msg: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Container>
            <Row className='form-row'>
                
                <label htmlFor="firstName">Name</label>
                
                
                <Field id="firstName" name="firstName" placeholder="Jane" />
                 
            </Row>
            <Row className='form-row'>
                
                <label htmlFor="phoneNUmber">Phone Number</label>
                
                
                <Field id="phoneNumber" name="phoneNumber" placeholder="1234567890" />
                
            </Row>
            <Row className='form-row'>
                
                <label htmlFor="location">Location</label>
                
                
                <Field id="location" name="location" placeholder="Doe" />
                
            </Row>
            <Row className='form-row'>
                
                <label htmlFor="email">Email</label>
                
                
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                
            </Row>
            <Row className='form-row'>
                
                <label htmlFor="msg">Message</label>
                
                
                <Field id="msg" name="msg" placeholder="Enter your message" />
                
            </Row>
        </Container>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default ContactUsForm;
