import React from 'react'
import './Contact.css'
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id="contact" className="contact-component">
            <h2 id="heading"><span style={{ color: "white" }}>CONTACT </span><span style={{ color: "#ffb400" }}>ME</span></h2>
            <p style={{ color: "white", textAlign: "center" }}>Would love to hear from from you all too, <br /> send me an message or connect with me. Let us build something great!</p>
            <div id="border" style={{ color: "#ffb400" }}></div>
            <div className="container">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Control type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3} placeholder="Enter Message"/>
                    </Form.Group>
                    <div>
                        <Button id="send-message" style={{ marginLeft: "670px", marginTop: "40px", marginBottom: "100px" }}> SEND MESSAGE </Button>
                    </div>
                </Form>
                <h1 style={{marginLeft:"500px", marginTop:"180px"}}>Okaaey Bye! 👋 </h1>
                <strong style={{marginLeft:"570px"}}>(Until Next time!)</strong>
            </div>
        </div>
    )
}

export default Contact
