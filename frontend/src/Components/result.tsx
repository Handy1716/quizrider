import { Button } from "react-bootstrap";



export default function Result({ retur } : { retur: ()=>void }){
    return(
        <div className="main question">

            <div className="centering h3">Result</div>
            <div className="mt-5"><span className="mx-3 h4">Right Answers:</span><span className="" ></span>{}</div>
            <div className="mt-3"><span className="mx-3 h4">Time:</span><span className="" ></span>{}</div>
            <div className="mt-3"><span className="mx-3 h4">Points </span><span className="" ></span>{}</div>
            <div className="centering mt-5"><Button onClick={retur}>Play a new game</Button></div>
        </div>
    )
}
