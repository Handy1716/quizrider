import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { apiQuizMe, apiQuizPublic } from "../api/api";
import CreateQuiz from "./createQuiz";
import QuizList from "./quizList";
import { Info, InfoCircle, InfoSquareFill } from 'react-bootstrap-icons';

export default function Tabsbar({createQuizClick, onScoreboardClick}:{createQuizClick:() => void, onScoreboardClick:(id:number)=> void}) {
    const [quizMeList, setQuizMeList] = useState([]);
    const [quizPublicList, setQuizPublicList] = useState([]);
   
    useEffect(() => {
      apiQuizMe((response: any) => {
        setQuizMeList(response);
      });
      apiQuizPublic((response: any) => {
        setQuizPublicList(response);
      });  
    }, []);

    return(
      <>
      <Container className='mt-5'>
        <Tabs
        defaultActiveKey="MyQuiz"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="PublicQuiz" title="Public quizzes" tabClassName="tabs">
        <Row>
        <Col />
        <Col xs={9}>
          <Row>
            <Col className='centering'><h4>Quiz name:</h4></Col>
            <Col className='centering'><h4>Creator name:</h4></Col>
            <Col className='centering'><h4>Playrate:</h4></Col>
            <Col className='centering'><h4>Scoreboard:</h4></Col>
            <hr />
          </Row>
          <QuizList list={quizPublicList} onScoreboardClick={onScoreboardClick}/>
        </Col>
        <Col />
      </Row>
        </Tab>
        <Tab eventKey="MyQuiz" title="My quizzes" tabClassName="tabs">
        <Row>
        <Col />
        <Col xs={9}>
        <Row>
            <Col className='centering'><h4>Quiz name:</h4></Col>
            <Col className='centering'><h4>Creator name:</h4></Col>
            <Col className='centering'><h4>Playrate:</h4></Col>
            <Col className='centering'><h4>Scoreboard:</h4></Col>
            <hr />
          </Row>
          <QuizList list={quizMeList} onScoreboardClick={onScoreboardClick}/>
          </Col>
        <Col />
      </Row>
        </Tab>
        <Tab eventKey="CreateQuiz" title="Create your quiz" tabClassName="tabs">
            <CreateQuiz />
        </Tab>
        <Tab eventKey="Info" title={<InfoCircle/>} tabClassName="tabs">
          <Info />
        </Tab>
      </Tabs>
      </Container>
     </>
    )
}