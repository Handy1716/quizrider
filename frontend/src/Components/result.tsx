import { Button } from "react-bootstrap";



export default function Result({ retur } : { retur: ()=>void }){
    return(
        <div className="main ">
            


            <Button onClick={retur}>Play a new game</Button>
        </div>
    )
}
