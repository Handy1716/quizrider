import { Col, Row } from "react-bootstrap";
import { QuizElement } from "../Classes/QuizElement";


export default function QuizList() {
    let a = new QuizElement("MyQuiz", "Gergő", 5 ,"asd" )
    return(
        <Row className="mt-8">
            <Col>{a.name}</Col>
            <Col>{a.creatorName}</Col>
            <Col>{a.popularity}</Col>
            <Col>{a.scoreboard}</Col>
        </Row>
    )
}