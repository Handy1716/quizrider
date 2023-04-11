import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { apiCreator, apiLogin } from "../api/api";

export default function Register({submitLogin}:{submitLogin: (e:any)=>void}) {
    const [showError, setShowError] = useState("");
     function handleSubmit(event : any) {
        if(event.target.password.value !== event.target.password2.value){
            setShowError("Password is not the same");
            setTimeout(() => setShowError(""), 3000);
        } else{
        apiCreator({
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }, (response : any) => {
            apiLogin({
                email: event.target.email.value,
                password: event.target.password.value,    
            }, (response : any) => {
                submitLogin(response);
            })
        }, (error : any) => {
            setShowError(error);
            setTimeout(() => setShowError(""), 3000);
        });
        }
        event.preventDefault();
        return false;
     }

    return (
        <div className="main width30">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginFormUser">
                <Form.Label>User name:</Form.Label>
                <Form.Control type="text" name="name" required placeholder="Jhon Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginFormEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" required placeholder="jhon.doe@example.hu" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="loginFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" required placeholder="Jhon1996" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginFormPassword2">
                <Form.Label>Password again:</Form.Label>
                <Form.Control type="password" name="password2" />
            </Form.Group>
            <div className="centering"><Button variant="primary" type="submit" className="mb-3">
                Register
            </Button></div>
            <Alert show={showError.length > 0} variant="danger">
                {showError}
            </Alert>
        </Form>
        </div>
    )
}