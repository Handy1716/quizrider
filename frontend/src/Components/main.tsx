import { Button, Form } from "react-bootstrap";



 export default function Main({startClick}: {startClick:(event:any)=>void}){
    return(
        <div className="main width30">
            <Form onSubmit={startClick} className="centering">
            <Form.Group className="mb-3" controlId="runcode">
                <Form.Label><h2>Runcode:</h2></Form.Label> <br />
                <Form.Control className="input centering mt-2" type="text" name="runcode" required placeholder="Enter your game code"/>
            </Form.Group>
            <div className="mainBoxElement"><Button type="submit">Start</Button></div>
            </Form>

        </div>
    )
}