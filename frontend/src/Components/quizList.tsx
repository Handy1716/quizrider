import { Button, Col, Row } from "react-bootstrap";
import { apiRuncode } from "../api/api";
import Runcode from "./runcode";
import { useState } from "react";
import { PersonLinesFill } from "react-bootstrap-icons";

//e.preventDefault();
//return false
export default function QuizList({list, onScoreboardClick}:{list:any, onScoreboardClick: (id:number) => void}) {
    const [runcode, setRuncode] = useState<string>("");
    function runCodeCreate(id: number){
            apiRuncode(
                id
            , (response : any) => {
                console.log(response.runCode);
                setRuncode(response.runCode);
            }, (error : any) => {
            });
            }
     return(
        <>
        <div className="centering"><h2>{runcode}</h2></div>
        {list.map((e:any, index:any) => {
            return <Row  key={"key "+ index} className={"quizes border " + (index % 2 ? "color1" : "color2") }>
                <Col className={"quizrow centering "} onClick={() => runCodeCreate(e.id)}>{e.name}</Col>
                <Col className={"quizrow centering "} onClick={() => runCodeCreate(e.id)}>{e.creator.name}</Col>
                <Col className={"quizrow centering borderRight"} onClick={() => runCodeCreate(e.id)}>{}</Col>
                <Col className={"quizrow centering"} ><span className="spandecorate" >Scoreboard</span><PersonLinesFill className="spandecorate mx-2" onClick={() => onScoreboardClick(e.id)}/></Col>
            </Row>
        })}
        </>
    )
}