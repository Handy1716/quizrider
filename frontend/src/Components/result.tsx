import { Button, Form } from "react-bootstrap";
import { apiScoreboard } from "../api/api";
import { getDevice } from "../api/session";

export default function Result({ result, runCode, retur } : { result : any, runCode : string, retur: ()=>void }) {
    

    let rightAnswers = 0;
    let time = 0;
    result.map((answer : any) => {
        rightAnswers += answer.rightAnswer === true ? 1 : 0;
        time += answer.time;
        return 1;
    });
    let points = Math.round(((60*30) - (time/1000)) * rightAnswers);

    function save() {
        const input = document?.getElementById("name") as HTMLInputElement;
        const name = input?.value;
        if (name) {
            apiScoreboard({
                runCode: runCode,
                deviceId: getDevice(),
                name: name,
                answers: result
            }, () => {
                retur();
            });
        }
        retur();
    }

    return(
        <div className="main question">
            <div className="centering h3">Result</div>
            <div className="mt-3 text-center">
                <Form.Control className="input centering mt-2" type="text" name="name" id="name" required placeholder="Enter your name"/>
            </div>
            <div className="mt-5"><span className="mx-3 h4">Right Answers:</span><span className="">{rightAnswers}/{result.length}</span></div>
            <div className="mt-3"><span className="mx-3 h4">Time:</span><span className="" >{time / 1000} seconds</span></div>
            <div className="mt-3"><span className="mx-3 h4">Points:</span><span className="" >{ points }</span></div>
            <div className="centering mt-5"><Button onClick={save}>Play a new game</Button></div>
        </div>
    )
}
