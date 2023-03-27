import { Button, Col, Form, Row } from "react-bootstrap";
//<div class="form-check form-switch"><input type="checkbox" id="custom-switch" class="form-check-input"><label title="" for="custom-switch" class="form-check-label">Check this switch</label></div>

export default function CreateQuiz(){
    return(
        <div>
            <Row>
                <Col>
                    <form>
                         <Row>
                            <Col><h4 className="logRegText">Quiz name:</h4></Col>
                            <Col><input name="email" id="email" type="text" /></Col>
                        </Row>
                        <form>
                        <Row>
                            
                            <Col><h4 className="logRegText">Add your quiz tag:</h4></Col>
                            <Col><input name="email" id="email" type="text" /><Button type="submit">+</Button></Col>
                                        
                        </Row>
                        </form>
                        <Row>
                            <Col><h4 className="logRegText">One round:</h4></Col>
                            <Col>
                            <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col><h4 className="logRegText">Private:</h4></Col>
                            <Col>
                            <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                            />
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </form>
                </Col>
                
                <Col/>  
            </Row>
        </div>
    )

}