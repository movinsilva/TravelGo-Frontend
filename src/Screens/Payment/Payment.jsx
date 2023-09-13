import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Payment.scss";
import {FaRegCreditCard, FaCcMastercard, FaPaypal} from 'react-icons/fa';
import {RiVisaLine} from 'react-icons/ri';

const Payment = () =>{
    return(
        <main className="payment">
            <Container className='payment-container'>
                <div className="content-inside">
                    <p className='payment-heading'>Payment Method</p>
                    <div className="centered-container">
                            <FaRegCreditCard size="1.5rem" className="card-icon" />
                            Please select your payment method
                    </div>
                        <div className="form-check-inline">
                            <input className="form-check-input-radio" type="radio" name="payment-method" id="visa" value="card" />
                            <label className="form-check-payment-methods" htmlFor="visa"><RiVisaLine></RiVisaLine></label>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input-radio" type="radio" name="payment-method" id="master" value="paypal" />
                            <label className="form-check-payment-methods" htmlFor="master"><FaCcMastercard></FaCcMastercard></label>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input-radio" type="radio" name="payment-method" id="paypal" value="cash" />
                            <label className="form-check-payment-methods" htmlFor="paypal"><FaPaypal></FaPaypal></label>
                        </div>
                    </div>
                <div className="divider"></div>
                <div className="content-inside">
                    <div className="new-card mb-4">
                        <p className="new-card-content">
                            <FaRegCreditCard size="1.5rem" className="card-icon" />
                            Add a new Card
                        </p>
                    </div>
                    <form className="card-form">
                        <Row>
                            <Col xs={6}>
                                <div className="form-group">
                                    <label htmlFor="card-number">Card Number</label>
                                    <input type="text" className="card-inputs" id="card-number"  />
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="form-group">
                                    <label htmlFor="card-holder">Card Holder's Name</label>
                                    <input type="text" className="card-inputs" id="card-holder" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                            <div className="form-group">
                         <label htmlFor="card-expiry">Card Expiry Date</label>
                                <div className="d-flex">
                                    <input
                                        type="text"
                                        className="card-inputs-date"
                                        id="card-expiry-mm"
                                        placeholder="MM"
                                        maxLength="2"
                                    />
                                    <span className="slash">/</span>
                                    <input
                                        type="text"
                                        className="card-inputs-date"
                                        id="card-expiry-yy"
                                        placeholder="YY"
                                        maxLength="2"
                                    />
                                </div>
                            </div>

                            </Col>
                            <Col xs={6}>
                                <div className="form-group">
                                    <label htmlFor="card-cvv">CVV</label>
                                    <input type="text" className="card-inputs" id="card-cvv"  />
                                </div>
                            </Col>
                        </Row>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="save-card" />   
                                <label className="form-check-label" htmlFor="save-card">
                                    Save Card Details
                                </label>
                            </div>
                        </div>
                    </form> 
                </div>

            </Container>
            <div className="terms-check mt-3">
                <input type="checkbox" className="form-check-input mx-2" id="agree-checkbox"/>
                <label className="terms-check-label" htmlFor="agree-checkbox">
                        Agree to the terms & conditions
                </label>
            </div>
            
            <div className="divider-outside mb-2"></div>

            <Container fluid={true}>
                <Row className="bottom-row">
                    <Col xs={4}>
                        <p className="total mt-2">Total Price : </p>
                    </Col>
                    <Col xs={4}>
                        <p className="total-value mt-2"> 3632.50 LKR</p>
                    </Col>
                    <Col xs={4}>
                        <LinkContainer to="/eticket">
                            <button className="btn btn-primary  btn-lg checkout-btn">Confirm and Pay</button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
                
        </main>
    );
}

export default Payment;