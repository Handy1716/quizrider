import React, { useState } from 'react';
import { FORMERR } from "dns";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


export default function Game(quiz: any){
    const [round, setRound] = useState<number>(0); 
    function btn1(){
        if(quiz.quiz.questions[round].answers[0].rightAnswer==true){
            //  TODO: 2 másodpercig legyen zöld és ne legyen kattintható és számolódjon valahol hogy sikeres pontja volt             
        } else {
            // TODO: 2 másodpercig legyen piros és ne legyen kattintható
        }
        if(quiz.quiz.questions[round+1]!=quiz.quiz.questions.length){
            // TODO: rendelelje le a scoreboardot vagy a végét a Game ne látszódjon 
        } else {
            setRound(round+1);
        }
    }
    console.log('ezitt', quiz);
    return(
        
        <Form>
        {quiz.quiz.name}
            <div className="main centering question">Kerdes</div>
            <Row className="answerRow"><Col ><div className="answer" onClick={btn1}>{quiz.quiz.questions.length}</div></Col><Col><div className="answer" onClick={btn1}></div></Col></Row>
            <Row className="answerRow"><Col><div className="answer" onClick={btn1}></div></Col><Col><div className="answer" onClick={btn1}></div></Col></Row>
        </Form>
    )
}