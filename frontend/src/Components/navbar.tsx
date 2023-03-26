import { Nav } from "react-bootstrap";


export default function Navbar({createQuizClick}:{createQuizClick:() => void}){
    return(
    <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
           <Nav.Link href="/quiz/public">Public quizzes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link href="/quiz/:id">My quizzes</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="quiz" onClick={createQuizClick}>Create quiz</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}