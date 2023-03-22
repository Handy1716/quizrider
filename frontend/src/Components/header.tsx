import { Button, Col, Row } from "react-bootstrap"
import Login from "./login"
import Register from "./register"



export default function Header() {
    return(
            
                <Row>
                    <Col><img src="images/logo.png" alt="logo" className="logo"/></Col>
                    <Col>
                      {if props.page}<Button className="btn-header"> Sign Up</Button>
                    </Col>
                </Row>
            
        )
}
