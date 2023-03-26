import { Button } from "react-bootstrap";

export default function Header({page, loginClick, registerClick} : {page : string, loggedIn: boolean, loginClick:() => void, registerClick:() => void}) {

    // login gomb akkor kell, ha a register oldalon vagyok
    const loginVisible = (page === "register");
    // signup gomb akkor kell, ha a login oldalon vagyok
    const signupVisible = (page === "login");

    return (
        <>
        <img src="" alt="" />
        <Button className={`btn ${loginVisible ? 'd-inline-block' : 'd-none'}`} onClick={loginClick}>Login</Button>
        <Button className={`btn ${signupVisible ? 'd-inline-block' : 'd-none'}`} onClick={registerClick}>Signup</Button>
        </>
    )
}
