import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { apiLogin } from "../api/api";

export default function Login({ submitLogin } : { submitLogin: (e : any)=>void }) {
    const [showError, setShowError] = useState("");

    function handleSubmit(event : any) {
        apiLogin({
            email: event.target.email.value,
            password: event.target.password.value,
        }, (response : any) => {
            submitLogin(response);
        }, (error : any) => {
            setShowError(error);
            setTimeout(() => setShowError(""), 3000);
        });
        event.preventDefault();
        return false;
    }

    return (
        <div className="main width30">
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="loginFormEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" required placeholder="Enter email" className="inputbox"/>
            </Form.Group>    
            <Form.Group className="mb-3" controlId="loginFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" required placeholder="Password" className="inputbox"/>
            </Form.Group>
            <div className="centering"><Button variant="primary" type="submit" className="mb-3">
                Login
            </Button></div>
            <Alert show={showError.length > 0} variant="danger">
                {showError}
            </Alert>
        </Form></div>
   )
}
