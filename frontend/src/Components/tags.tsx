import { useState } from "react"
import { Button } from "react-bootstrap"
import { InputTags } from "react-bootstrap-tagsinput"


export default function Tags() {
    const [state, setState] = useState<string[]>([])


    return(
        <div>
      <div className='input-group'>
        <InputTags values={state} onTags={(value) => setState(value.values)} />
        <Button
          type='button'
          data-testid='button-clearAll'
          onClick={() => {
            setState([])
          }}
        >
          Clear
        </Button>
      </div>
    </div>
    )
}