import Login from "./login"
import Register from "./register"


export default function Header(props:{loggin:boolean}) {
    function Registerf() {
        <Register />
    }
    function Loginf() {
        <Login />
    }


    if(props.loggin){
        return(
            <><div><img src="" alt="logo" /> Quizrider<button onClick={Registerf}> Sign Up</button></div></>
    )} else {
        return(
            <><div><img src="" alt="logo" /> Quizrider<button onClick={Loginf}> Log In</button></div></>
        )
    }
}