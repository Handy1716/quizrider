import { Button, Col, Form, Row } from "react-bootstrap";
import Tags from "./tags";
//<div class="form-check form-switch"><input type="checkbox" id="custom-switch" class="form-check-input"><label title="" for="custom-switch" class="form-check-label">Check this switch</label></div>

export default function CreateQuiz(){
    return(<>
        <Form>
            <Tags />
            <Form.Group>
                <Form.Label>Quiz name:</Form.Label>
                <Form.Control type="text" name="name" required placeholder="My best quiz"/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Only one round:</Form.Label>
            <Form.Check 
                type="switch"
                id="custom-switch"
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>Private:</Form.Label>
            <Form.Check 
                type="switch"
                id="custom-switch"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Question:</Form.Label>
                <Form.Control type="text" name="question"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Answer 1:</Form.Label>
                <Form.Control type="text" name="a1"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Answer 2:</Form.Label>
                <Form.Control type="text" name="a2"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Answer 3:</Form.Label>
                <Form.Control type="text" name="a3"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Answer 4:</Form.Label>
                <Form.Control type="text" name="a4"/>
            </Form.Group>
            <br />
            <Button type="submit">Create Quiz</Button>
        </Form></>
    )
}