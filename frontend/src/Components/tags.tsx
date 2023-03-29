import { useState } from "react"
import { Button } from "react-bootstrap"
import { InputTags } from "react-bootstrap-tagsinput"


export default function Tags() {
    const [state, setState] = useState<string[]>([])


    return(
        <InputTags values={state} elementClassName="valami" className="form-control" onTags={(value) => setState(value.values)} />
    
    )
}