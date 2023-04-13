import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { apiQuizMe, apiQuizPublic } from "../api/api";
import CreateQuiz from "./createQuiz";
import QuizList from "./quizList";

export default function Tabsbar({createQuizClick}:{createQuizClick:() => void}) {
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
      <Container>
        <br /><br />
        <Tabs
        defaultActiveKey="profile"
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
          <QuizList list={quizPublicList}/>
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
          <QuizList list={quizMeList}/>
          </Col>
        <Col />
      </Row>
        </Tab>
        <Tab eventKey="CreateQuiz" title="Create your quiz" tabClassName="tabs">
            <CreateQuiz />
        </Tab>
      </Tabs>
      </Container>
     </>
    )
}