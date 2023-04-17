import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Game({quiz, Finish} : {quiz : any, Finish:()=>void}) {
    const [round, setRound] = useState<number>(0);
    const [color, setColor] = useState<boolean>(false);
    const [result, setResult] = useState<Array<any>>([]);
    const [isempty, setIsemty] = useState<boolean>(false);
 
    if (!quiz || !quiz.questions) {
        return (<></>);
    }

    const buttonColors = quiz.questions[round].answers.map((answer : any) => {
        return answer.rightAnswer  ? "bg-success noclick" : "bg-danger noclick";
    });

    function onAnswerClick(index : number) {
        // const rightAnswer = quiz.questions[round].answers[index].rightAnswer;
        result.push({
            questionId: quiz.questions[round].id,
            answerId: quiz.questions[round].answers[index].id
        });
        setResult(result);
        setColor(true);
        setTimeout(() => {
            setColor(false);
            if (round+1 < quiz.questions.length) {
                setRound(round + 1);
            } else {
                console.log('vege', result);
                Finish();
                return( 
                    <>asd</>
                )
            }
        }, 2000);
    }
    return(
        <div className='mt-5'>
            <div className="main centering question">{quiz.questions[round].text}</div>
            <Row className="answerRow">
                {quiz.questions[round].answers.map((answer : any, index : number) => {
                    if (answer.text!=="") {
                    return <Col key={"answer" + index}>
                        <div className={"answer " + (color ? buttonColors[index] : '')} onClick={() => onAnswerClick(index)}>{answer.text}</div>
                    </Col>}
                })}
                
            </Row>
        </div>
    )
}