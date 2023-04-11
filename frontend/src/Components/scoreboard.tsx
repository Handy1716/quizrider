import { Col, Form, Row } from "react-bootstrap";


export default function Scoreboard() {
    return(
        <div className="main centering width30">
            <Form>                
            <Form.Group className="mb-3" controlId="searchFormUser">
                <Form.Label>User name:</Form.Label>
                <Form.Control type="text" name="name" required placeholder="Jhon Doe" />
            </Form.Group>
            </Form>
            <Row></Row>
            <Row><Col><h4>Rank</h4></Col><Col><h4>Name</h4></Col><Col><h4>Points</h4></Col></Row>
            <div><Row><Col><h6>1.</h6></Col><Col><h6>Handy</h6></Col><Col><h6>976</h6></Col></Row></div>
        </div>
    )
}