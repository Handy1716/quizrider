import { Button, Col, Row } from "react-bootstrap"
import Login from "./login"
import Register from "./register"



export default function Header2() {
    return(
            
                <Row>
                    <Col><img src="images/logo.png" alt="logo" className="logo"/></Col>
                    <Col><Button className="btn-header"> Log In</Button></Col>
                </Row>
            
        )
}
