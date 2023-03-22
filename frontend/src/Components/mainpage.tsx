import { useState } from "react";
import Gyakorlas from "./gyakorlas";
import Header from "./header";
import Login from "./login";
import Register from "./register";

export default function MainPage() {
    const [asd, setAsd] = useState<boolean>(false);
    function handleClick() {
        setAsd(!asd);
    }
    if(asd === true) {
    return ( 
        <>
        <Gyakorlas value="malacka" onGyakorlasClick={handleClick}/>
        <Login />
        </>
    )
    } else {
    return ( 
            <div>
            <Gyakorlas value="malacka" onGyakorlasClick={handleClick}/>
            <Register />
            </div>
        )
    }
}