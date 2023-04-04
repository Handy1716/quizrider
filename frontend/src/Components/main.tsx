import { Button, Form } from "react-bootstrap";
import Runcode from "./runcode";


 export default function Main({loginClick, registerClick,}:{loginClick:() => void, registerClick:() => void}){
    return(
        <div className="main">
            <Form>
            <div className="mainBoxElement">Runcode:</div>
            <div className="mainBoxElement"><Runcode /></div>
            <div className="mainBoxElement"><Button type="submit">Start</Button></div>
            </Form>

        </div>
    )
}