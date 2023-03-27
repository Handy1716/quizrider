import { Nav, Tab, Tabs } from "react-bootstrap";
import CreateQuiz from "./createQuiz";

//onClick={createQuizClick}>Create quiz
export default function Tabsbar({createQuizClick}:{createQuizClick:() => void}){
    return(
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="PublicQuiz" title="Public quizzes">
            asd
        </Tab>
        <Tab eventKey="MyQuiz" title="My quizzes">

        </Tab>
        <Tab eventKey="CreateQuiz" title="Create your quiz">
            <CreateQuiz />
        </Tab>
      </Tabs>
    )
}