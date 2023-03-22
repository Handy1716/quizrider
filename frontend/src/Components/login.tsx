import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";
import Header2 from "./header2";

export default function Login() {
    return (
            <>
            <Header />
            <form action="/login" /* ezen kell javitani */ method="post">
                <Row>
                    <Col><h3 className="logRegText">Name:</h3></Col>
                    <Col><input name="email" id="email"></input></Col>
                </Row>
                <Row>
                    <Col><h3 className="logRegText">Password:</h3></Col>
                    <Col><input name="password" id="password"></input></Col>            
                </Row>
                <Row id="centering"><button type="submit">Login</button></Row>
            </form>
            </>
    )
}