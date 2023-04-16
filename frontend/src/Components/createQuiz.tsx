import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { apiQuizSet } from "../api/api";
import { PlusSquare, PlusSquareFill } from "react-bootstrap-icons";

//<div class="form-check form-switch"><input type="checkbox" id="custom-switch" class="form-check-input"><label title="" for="custom-switch" class="form-check-label">Check this switch</label></div>

export default function CreateQuiz(){
    const [questions, setQuestions] = useState<Array<any>>([]);
    function addQuestion(){
        const question = {
            text: "",
            answers: [{
                text: "",
                rightAnswer: false,
            },
            {
                text: "",
                rightAnswer: false,
            },
            {
                text: "",
                rightAnswer: false,
            },
            {
                text: "",
                rightAnswer: false,
            }],
        };
        setQuestions([...questions, question]);
    }

    function save(e:any){
        const quiz:any = {
            name: e.target.name.value,
            public: e.target.public.checked,
            oneRound: false,
            questions: [],
            tags: [],
        }
        questions.map((q:any, index: number)=>{
            return quiz.questions.push({
                text: e.target["text"+ index].value,
                answers: [{
                    text: e.target["answer1"+index].value,
                    rightAnswer: e.target["right"+ index].value==1,
                },{
                    text: e.target["answer2"+index].value,
                    rightAnswer: e.target["right"+ index].value==2,
                },{
                    text: e.target["answer3"+index].value,
                    rightAnswer: e.target["right"+ index].value==3,
                },{
                    text: e.target["answer4"+index].value,
                    rightAnswer: e.target["right"+ index].value==4,
                }]
            })
        })
        apiQuizSet(quiz, () => {});
        e.preventDefault();
        return false;
    }
    return(
        <Form onSubmit={save}>
            <Form.Group className="centering">
                <Form.Label><h4>Quiz name:</h4></Form.Label><br />
                <Form.Control type="text" className="input" name="name" required placeholder="My best quiz"/>
            </Form.Group>
            <Form.Group>
            </Form.Group>
            <Form.Group className="centering">
            <Form.Label><h4 className="mt-2">Public:</h4> </Form.Label>
            <Form.Check 
                type="switch"
                name="public"
                />
            </Form.Group>
            <hr/>
            {questions.map((q:any, index : number) => {
                return  <div key={"question" + index}>
                    
                <Form.Group className="centering">
                    <Form.Label><h5>Question {index+1}:</h5></Form.Label> <br />
                    <Form.Control className="input" type="text" name={"text" + index}/>
                </Form.Group>
                <Row>
                    <Col><Form.Group>
                    <Form.Label>Answer 1:</Form.Label> <br />
                    <Form.Control type="text" className="input" name={"answer1"+ index}/> <Form.Check
                inline
                checked
                label=" Right"
                name={"right" + index}
                type="radio"
                value="1"
              />
                </Form.Group>
               </Col>
                    <Col> <Form.Group>
                    <Form.Label>Answer 2:</Form.Label> <br />
                    <Form.Control type="text" className="input" name={"answer2"+ index}/>
                    <Form.Check
                inline
                label=" Right"
                name={"right" + index}
                type="radio"
                value="2"
              />
                </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group>
                    <Form.Label>Answer 3:</Form.Label> <br />
                    <Form.Control type="text" className="input" name={"answer3"+ index}/>
                    <Form.Check
                    inline
                    label=" Right"
                    name={"right" + index}
                    type="radio"
                    value="3"
                    />
                    </Form.Group>
                    
                    </Col>
                    <Col>
                     <Form.Group>
                    <Form.Label>Answer 4:</Form.Label> <br />
                    <Form.Control type="text" className="input" name={"answer4"+ index}/>
                    <Form.Check
                    inline
                    label=" Right"
                    name={"right" + index}
                    type="radio"
                    value="4"
                    />
                    </Form.Group>
                    
                    </Col>
                    </Row>
              <br />
              <hr />
              </div>
              
            })}
            <div className="centering">
            <Button className="mt-2" onClick={addQuestion}><PlusSquareFill/> Add Question</Button> <br />
            <Button type="submit" className="mt-5">Create Quiz</Button></div>
        </Form>
    )
}