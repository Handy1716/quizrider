import { Button } from "react-bootstrap";
import Runcode from "./runcode";


 export default function Main({loginClick, registerClick,}:{loginClick:() => void, registerClick:() => void}){
    return(
        <div id="main">
            <div className="mainBoxElement">Runcode:</div>
            <div className="mainBoxElement"><Runcode /></div>
            <div className="mainBoxElement"><Button>Start</Button></div>
        </div>
    )
}