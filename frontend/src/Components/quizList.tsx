import { Col, Row } from "react-bootstrap";

export default function QuizList({list}:{list:any}) {
    return(
        <>
        {list.map((e:any) => {
            return <Row className="mt-8">
                <Col>{e.name}</Col>
                <Col>{e.creator.name}</Col>
                <Col>{}</Col>
                <Col>{}</Col>
            </Row>
        })}
        </>
    )
}