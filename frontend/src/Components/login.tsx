import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { apiLogin } from "../api/api";

export default function Login() {
    const [showError, setShowError] = useState(false);

    function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        apiLogin(data, (response : any) => {
            console.log(response);
        }, (error : any) => {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        });
    }

    return (
        <div className="main width30">
        <Form onSubmit={handleSubmit}>
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
            <Alert show={showError} variant="danger">
                Login error
            </Alert>
        </Form></div>
   )
}
