import { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import Login from "./login"
import Register from "./register"

export default function Header() {
    const [btLog, setBtLog] = useState<boolean>(true);

    function SignUpClick() {
        setBtLog(false);
    }
    return(
                <Row>
                    <Col><img src="images/logo.png" alt="logo" className="logo"/></Col>
                    <Col><Button className="btn-header"> Sign Up</Button></Col>
                </Row>
            
        )
}
