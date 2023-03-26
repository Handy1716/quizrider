import { Button } from "react-bootstrap";
import Runcode from "./runcode";


 export default function Main(){
    return(
        <div>
            <div><Runcode /></div>
            <div><Button>Start</Button></div>
            <div><Button>Login</Button></div>
            <div><Button>Register</Button></div>
        </div>
    )
}