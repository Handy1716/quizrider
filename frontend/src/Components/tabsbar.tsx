import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import CreateQuiz from "./createQuiz";
import QuizList from "./quizList";

export default function Tabsbar({createQuizClick}:{createQuizClick:() => void}){
    return(
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="PublicQuiz" title="Public quizzes">
        <Row>
        <Col />
        <Col xs={6}><Row><Col>as</Col><Col>as</Col></Row><QuizList /></Col>
        <Col />
      </Row>
        </Tab>
        <Tab eventKey="MyQuiz" title="My quizzes">
        <Row>
        <Col />
        <Col xs={6}><Row><Col>as</Col><Col>as</Col></Row><QuizList /></Col>
        <Col />
      </Row>
        </Tab>
        <Tab eventKey="CreateQuiz" title="Create your quiz">
            <CreateQuiz />
        </Tab>
      </Tabs>
    )
}