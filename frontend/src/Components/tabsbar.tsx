import React, { useState, useEffect, Component } from 'react';
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { apiQuizMe, apiQuizPublic } from "../api/api";
import CreateQuiz from "./createQuiz";
import { Info, InfoCircle, InfoSquareFill } from 'react-bootstrap-icons';
import QuizListP from './quizListP';
import QuizList from './quizList';

export default function Tabsbar({createQuizClick, onScoreboardClick}:{createQuizClick:() => void, onScoreboardClick:(id:number, name:string)=> void}) {
    const [quizMeList, setQuizMeList] = useState([]);
    const [quizPublicList, setQuizPublicList] = useState([]);
    const [reload, SetReload] = useState<boolean>(false);
    function ReloadList(){
      apiQuizMe((response: any) => {
        setQuizMeList(response);
      });
      apiQuizPublic((response: any) => {
        setQuizPublicList(response);
      });  
    }
    useEffect(() => {
      ReloadList();
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
            <Col className='centering'><h4>Runcode:</h4></Col>
            <Col className='centering'><h4>Scoreboard:</h4></Col>
            <hr />
          </Row>
          <QuizListP list={quizPublicList} onScoreboardClick={onScoreboardClick}/>
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
            <Col className='centering'><h4>Runcode:</h4></Col>
            <Col className='centering'><h4>Scoreboard:</h4></Col>
            <Col xs={1} className='centering'></Col>
            <hr />
          </Row>
          <QuizList list={quizMeList} onScoreboardClick={onScoreboardClick}/>
          </Col>
        <Col />
      </Row>
        </Tab>
        <Tab eventKey="CreateQuiz" title="Create your quiz" tabClassName="tabs">
            <CreateQuiz refreshList={ReloadList} />
        </Tab>
      </Tabs>
      </Container>
     </>
    )
}