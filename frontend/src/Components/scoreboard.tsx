import { Col, Container, Form, Row } from "react-bootstrap";


export default function Scoreboard({scoreboard, quizName}:{scoreboard:any, quizName:any}) {
    return(
        <Container>
            <div className="main centering">
                <h1>{quizName}</h1>               
                <h4>Scoreboard</h4>
                <Row className="mt-5"><Col><h4>Rank</h4></Col><Col><h4>Name</h4></Col><Col><h4>Points</h4></Col></Row>
                {scoreboard.map((e:any, index:any) => {
                return <Row  key={"key1 "+ index}>
                    
                    <Col><h6>{index+1  + " ."}</h6></Col>
                    <Col><h6>{e.name}</h6></Col>
                    <Col><h6>{e.points}</h6></Col>
                </Row> 
            })}
            </div>
        </Container>
    )
}