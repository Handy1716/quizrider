import { Button, Col, Form, Row } from "react-bootstrap";
export default function Register() {
    return (
        <div className="main">
            <Form>
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
            <Form.Group className="mb-3" controlId="loginFormPassword">
                <Form.Label>Password again:</Form.Label>
                <Form.Control type="password" name="password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
                Login
            </Button>
        </Form>
        </div>
    )
}