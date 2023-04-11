import { Col, Row } from "react-bootstrap";
import { QuizElement } from "../Classes/QuizElement";


export default function QuizList({list}:{list:any}) {
    let a = new QuizElement("MyQuiz", "Gergő", 5 ,"asd" )
    return(
        <>
        {list.forEach((e:any) => {
        <Row className="mt-8">
            <Col>{e.name}</Col>
            <Col>{e.creator.name}</Col>
            <Col>{}</Col>
            <Col>{}</Col>
        </Row>
            
        })}
        </>
    )
}