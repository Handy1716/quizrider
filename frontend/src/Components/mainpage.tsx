import { useState } from "react";
import Header from "./header";
import Login from "./login";
import Register from "./register";

export default function MainPage() {
    const [asd, setAsd] = useState<boolean>(false);
    function handleClick() {
        setAsd(!asd);
    }
    return (
        <>
            {asd ? (
        <div>
        <Header value="Register" onHeaderClick={handleClick} />
        <Login />
        </div>
      ) : (
        <div>
        <Header value="Log In" onHeaderClick={handleClick} />
        <Register />
        </div>
      )}
        </>
    )
}