import { Button, Col, Row } from "react-bootstrap";
import { apiPlay, apiQuizDel, apiRuncode } from "../api/api";
import Runcode from "./runcode";
import { useState } from "react";
import { PersonLinesFill, Trash3Fill } from "react-bootstrap-icons";

//e.preventDefault();
//return false
export default function QuizList({list, onScoreboardClick, reloadList}:{list:any, onScoreboardClick: (id:number, name:string) => void, reloadList:()=>void}) {
    const [runcode, setRuncode] = useState<string>("");
    const [clicked, setClicked] = useState<number>(-1);
    function DeleteQuiz(id:number){
        apiQuizDel(id,(response: any) => {
            reloadList();
          });
    }
    function runCodeCreate(id: number, i: number){
            setClicked(i);
            apiRuncode(
                id
            , (response : any) => {
                setRuncode(response.runCode);
                navigator.clipboard.writeText(runcode);
            }, (error : any) => {
            });
            }
     return(
        <>
        {list.map((e:any, index:any) => {
            return <Row  key={"key "+ index} >
                <Col xs={8}>
                <Row className={"quizes border mt-2"}>
                <Col className={"quizrow centering " + (index % 2 ? "color1" : "color2")} onClick={() => runCodeCreate(e.id, index)}>{e.name}</Col>
                <Col className={"quizrow centering " + (index % 2 ? "color1" : "color2")} onClick={() => runCodeCreate(e.id, index)}>{e.creator.name}</Col>
                <Col className={"quizrow centering borderRight " + (index % 2 ? "color1 " : "color2 ")} onClick={() => runCodeCreate(e.id, index)}><b className={(clicked == index ? "runcodeVisible" : "notvisible")}>{runcode}</b></Col>
                </Row>
                </Col>
                <Col className={"quizrow border mt-2 centering"} onClick={() => onScoreboardClick(e.id, e.name)}><span className="spandecorate" >Scoreboard</span></Col>
                <Col xs={1}><Button className="delete mt-2" onClick={()=>DeleteQuiz(e.id)}><Trash3Fill></Trash3Fill></Button></Col>
            </Row>
        })}
        </>
    )
}