import { FORMERR } from "dns";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


export default function Game(){
    return(
        <Container>
        <Form>
            <div className="question">Kerdes</div>
            <Row className="answerRow"><Col ><div className="answer">asd</div></Col><Col><div className="answer">asd</div></Col></Row>
            <Row className="answerRow"><Col><div className="answer">asd</div></Col><Col><div className="answer">ask</div></Col></Row>
        </Form>
        </Container>
    )
}