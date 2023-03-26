import { Button } from "react-bootstrap";

export default function Header({page, loginClick, registerClick, mainClick} : {page : string, loggedIn: boolean, loginClick:() => void, registerClick:() => void
mainClick: () => void}) {

    // login gomb akkor kell, ha a register oldalon vagyok
    const loginVisible = (page === "register");
    // signup gomb akkor kell, ha a login oldalon vagyok
    const signupVisible = (page === "login");
    const middleLogo = (page === "main");

    return (
        <>

        <img src="images/logo.png" className={`logo ${middleLogo ? 'centering' : ''}`} onClick={mainClick} alt="logo"/>
        <Button className={`btn ${loginVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={loginClick}>Login</Button>
        <Button className={`btn ${signupVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={registerClick}>Signup</Button>
        <hr />
        </>
    )
}
