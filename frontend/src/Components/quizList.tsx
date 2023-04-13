import { Button, Col, Row } from "react-bootstrap";
import { apiRuncode } from "../api/api";

//e.preventDefault();
//return false;
export default function QuizList({list}:{list:any}) {
    
    function runCodeCreate(id: number){
            apiRuncode(
                id
            , (response : any) => {
                console.log(response.runCode);
            }, (error : any) => {
            });
            }
     return(
        <>
        <div className="border">
        {list.map((e:any, index:any) => {
            return <Row className="quizes border">
                <Col className={"quizrow centering " + (index %2 ? "color1" : "color2")}>{e.name}</Col>
                <Col className={"quizrow centering " + (index %2 ? "color1" : "color2")}>{e.creator.name}</Col>
                <Col className={"quizrow centering " + (index %2 ? "color1" : "color2")}>{}</Col>
                <Col className={"quizrow centering " + (index %2 ? "color1" : "color2")}><Button onClick={() => runCodeCreate(e.id)}>Scoreboard</Button></Col>
            </Row>
        })}</div>
        </>
    )
}