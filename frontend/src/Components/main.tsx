import { Button, Form } from "react-bootstrap";
import Runcode from "./runcode";


 export default function Main({startClick}: {startClick:(event:any)=>void}){
    return(
        <div className="main width30">
            <Form onSubmit={startClick}>
            <div className="mainBoxElement"><h3>Runcode:</h3></div>
            <div className="mainBoxElement"><Runcode /></div>
            <div className="mainBoxElement"><Button type="submit">Start</Button></div>
            </Form>

        </div>
    )
}