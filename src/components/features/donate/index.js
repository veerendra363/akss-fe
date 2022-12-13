import React from "react";
import './_donate.css'
import QrCode from "../../../media/images/QRCode.jpeg"
import BhimUpi from '../../../media/images/BhimUPI.jpg'
import { Formik, Form } from "formik";
import * as yup from "yup";
export default function DonatePage() {
    return (
        <div className="Donate-page">
            <div className="form-container">
                <div>
                    <div>
                        <h5>FILL THE FORM TO DONATE</h5>
                        <Formik
                            initialValues={{ Name: '', Email: '', Amount: 0, Mobile: '' }}
                            validationSchema={yup.object({
                                Name: yup.string(),
                                Email: yup.string().required('Email requied'),
                                Amount: yup.number().required('Amount required'),
                                Mobile: yup.number()
                            })}
                            onSubmit={values => { console.log('values', values) }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleSubmit,
                                handleBlur,
                                setFieldValue,
                            }
                            ) => {
                                const onChange = e => {
                                    const { name, value } = e.target;
                                    console.log('name ,value', name, value);
                                    setFieldValue(name, value);
                                };
                                return (
                                    <Form onSubmit={handleSubmit} className='Donate-form'>
                                        <div className="form-group">
                                            <label htmlFor="Name">Name</label>
                                            <input type="text" name="Name" placeholder="Enter name" value={values.Name} onChange={onChange} className="form-control"></input><br></br>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Email">Email</label>
                                            <input type="text" name="Email" placeholder="Enter email" value={values.Email} onChange={onChange} className="form-control"></input>
                                            {errors.Email && touched.Email ? (
                                                <span className='error-input-msg'>
                                                    {errors.Email}
                                                </span>
                                            ) : null}</div><br></br>
                                        <div className="form-group">
                                            <label htmlFor="Amount">Amount</label>
                                            <input type="number" name="Amount" placeholder="Enter amount" value={values.Amount} onChange={onChange} className="form-control"></input>
                                            {errors.Amount && touched.Amount ? (
                                                <span className='error-input-msg'>
                                                    {errors.Amount}
                                                </span>
                                            ) : null}</div><br></br>
                                        <div className="form-group">
                                            <label htmlFor="Mobile">Mobile</label>
                                            <input name="Mobile" placeholder="Enter mobile" value={values.Mobile} onChange={onChange} className="form-control"></input><br></br><br></br></div>
                                        <button type="submit" className="btn btn-primary submit-button" >Proceed to Donate</button>
                                    </Form>)
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className="QR-container">
                <div >
                    <h5>OUR BAMK DETAILS</h5>
                    <table class="table table-hover back-table">
                        <tbody>
                            <tr>
                                <th scope="row">Bank Name</th>
                                <td>StateBank Of India</td>
                                <td>Hdfc Bank</td>
                                <td>AP National Bank</td>
                            </tr>
                            <tr>
                                <th scope="row">Account Name</th>
                                <td>Ganesh</td>
                                <td>Avinash</td>
                                <td>Veerendra</td>
                            </tr>
                            <tr>
                                <th scope="row">Account No</th>
                                <td >1122324343</td>
                                <td>11213232424</td>
                                <td>5435647657677657</td>
                            </tr>
                            <tr>
                                <th scope="row">IFSC Code</th>
                                <td >A1A2</td>
                                <td>B2B3B4</td>
                                <td>C1C3C3r</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="qr-heading">SCAN AND PAY WITH ANY UPI APP</h5>
                    <div className="Upi-image">
                        <img src={BhimUpi} alt='upiicon' className="upi-image" />
                    </div>
                    <div className="Qr-image">
                        <img src={QrCode} ale='Qrcode' className='qr-image' alt='QrCode' />
                    </div>
                </div>
            </div>
        </div>
    )
}