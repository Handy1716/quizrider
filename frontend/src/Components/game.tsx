import React, {  useState } from 'react';
import { Col, Row } from "react-bootstrap";

export default function Game({quiz, Finish} : {quiz : any, Finish:(result: any)=>void}) {
    const [round, setRound] = useState<number>(0);
    const [color, setColor] = useState<boolean>(false);
    const [result, setResult] = useState<Array<any>>([]);
    const [startTime, setStartTime] = useState<number>(Date.now());
 
    if (!quiz || !quiz.questions) {
        return (<></>);
    }

    const buttonColors = quiz.questions[round].answers.map((answer : any) => {
        return answer.rightAnswer  ? "bg-success noclick" : "bg-danger noclick";
    });

    function onAnswerClick(index : number) {
        var endTime = Date.now();
        result.push({
            questionId: quiz.questions[round].id,
            answerId: quiz.questions[round].answers[index].id,
            rightAnswer: quiz.questions[round].answers[index].rightAnswer,
            time: endTime - startTime
        });
        setResult(result);
        setColor(true);
        setTimeout(() => {
            setColor(false);
            if (round+1 < quiz.questions.length) {
                setRound(round + 1);
                setStartTime(Date.now());
            } else {
                Finish(result);
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
                    return <></>
                })}
                
            </Row>
        </div>
    )
}