import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { apiQuizSet } from "../api/api";
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
            <Form.Group>
                <Form.Label>Quiz name:</Form.Label>
                <Form.Control type="text" name="name" required placeholder="My best quiz"/>
            </Form.Group>
            <Form.Group>
            </Form.Group>
            <Form.Group>
            <Form.Label>Public:</Form.Label>
            <Form.Check 
                type="switch"
                name="public"
                />
            </Form.Group>
            <Button onClick={addQuestion}>asd</Button>
            {questions.map((q:any, index : number) => {
                return  <div key={"question" + index}>
                <Form.Group>
                    <Form.Label>Question:</Form.Label>
                    <Form.Control type="text" name={"text" + index}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Answer 1:</Form.Label>
                    <Form.Control type="text" name={"answer1"+ index}/>
                </Form.Group>
                <Form.Check
                inline
                label="Right Answer"
                name={"right" + index}
                type="radio"
                value="1"
              />
                <Form.Group>
                    <Form.Label>Answer 2:</Form.Label>
                    <Form.Control type="text" name={"answer2"+ index}/>
                </Form.Group>
                <Form.Check
                inline
                label="Right Answer"
                name={"right" + index}
                type="radio"
                value="2"
              />
                <Form.Group>
                    <Form.Label>Answer 3:</Form.Label>
                    <Form.Control type="text" name={"answer3"+ index}/>
                </Form.Group>
                <Form.Check
                inline
                label="Right Answer"
                name={"right" + index}
                type="radio"
                value="3"
              />
                <Form.Group>
                    <Form.Label>Answer 4:</Form.Label>
                    <Form.Control type="text" name={"answer4"+ index}/>
                </Form.Group>
                <Form.Check
                inline
                label="Right Answer"
                name={"right" + index}
                type="radio"
                value="4"
              />
              </div>
            })}
            <br />
            <Button type="submit">Create Quiz</Button>
        </Form>
    )
}