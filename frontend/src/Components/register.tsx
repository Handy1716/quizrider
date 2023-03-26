import { Button, Col, Row } from "react-bootstrap";
export default function Register() {
    return (
        <>
            <form action="/creator" /* ezen kell javitani */ method="post">
                <Row>
                    <Col><h3 className="logRegText">Email:</h3></Col>
                    <Col><input name="email" id="email" type="text" /></Col>
                </Row>
                <Row>
                    <Col><h3 className="logRegText">Password:</h3></Col>
                    <Col><input name="password" id="password"></input></Col>            
                </Row>
                <Row>
                    <Col><h3 className="logRegText">Password again:</h3></Col>
                    <Col><input name="password2" id="password2" /></Col>            
                </Row>
                <Row><Col className="centering"><Button type="submit">Register</Button></Col></Row>
            </form>
        </>
    )
}