import { Button } from "react-bootstrap";
import Runcode from "./runcode";


 export default function Main({loginClick, registerClick,}:{loginClick:() => void, registerClick:() => void}){
    return(
        <div>
            <div><Runcode /></div>
            <div><Button>Start</Button></div>
            <div><Button onClick={loginClick}>Login</Button></div>
            <div><Button onClick={registerClick}>Register</Button></div>
        </div>
    )
}