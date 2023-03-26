import { Button, Col, Row } from "react-bootstrap";


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
                            <Col><h4 className="logRegText">One Round:</h4>  </Col><Col><input type="radio" name="oneRound" id="yes" value="Yes" /><label htmlFor="Yes"><h4>yes</h4></label><input type="radio" name="oneRound" id="no" value="No" /><label htmlFor="No"><h4>no</h4></label></Col>
                        </Row>
                        <Row>
                            <Col><input type="radio" name="Public" id="public" value="Public" /><label htmlFor="Public"><h4>public</h4></label> </Col><Col><input type="radio" name="Private" id="private" value="Private" /><label htmlFor="Private"><h4>Private</h4></label></Col>
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