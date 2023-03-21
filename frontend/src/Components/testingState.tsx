import { useState } from "react"

export default function TestingState (props:{name:string,age:number}) {


    const [letter, setLetter] = useState<string>();

    function changeToKorte() {
        setLetter('korte')
    }
    const changeToAlma = () => {
        setLetter('alma')
    }
    return (
        <div> 
            {props.age}
            { letter }
            <div><button onClick={changeToAlma}>alma</button></div>
            <div><button onClick={changeToKorte}>körte</button></div>
            <div><button>segg</button></div>
        </div>
    )
}

