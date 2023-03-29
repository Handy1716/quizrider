import { Button, Col, Form, Row } from "react-bootstrap";
import Tags from "./tags";
//<div class="form-check form-switch"><input type="checkbox" id="custom-switch" class="form-check-input"><label title="" for="custom-switch" class="form-check-label">Check this switch</label></div>

export default function CreateQuiz(){
    return(<>
    <Tags />
        <Form>
            <Form.Group>
                <Form.Label>Quiz name:</Form.Label>
                <Form.Control type="text" name="name" required placeholder="My best quiz"/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
        </Form></>
    )
}