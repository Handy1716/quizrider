import { Button } from "react-bootstrap";
import { PAGES } from "../pages";
//border-bottom border-1 border-warning box-shaddow

export default function Header({page, loginClick, registerClick, mainClick} : {page : PAGES, loggedIn: boolean, loginClick:() => void, registerClick:() => void
mainClick: () => void}) {

    // login gomb akkor kell, ha a register oldalon vagyok
    const loginVisible = (page === PAGES.register);
    // signup gomb akkor kell, ha a login oldalon vagyok
    const signupVisible = (page === PAGES.login);
    const mainVisible = (page === PAGES.main);

    return (
        <div className="square header">
        <img src="images/logo.png" className="logo centering"  onClick={mainClick} alt="logo"/>
        <Button className={`btn ${loginVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={loginClick}>Login</Button>
        <Button className={`btn ${signupVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={registerClick}>Signup</Button>
        <Button className={`btn ${mainVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={loginClick}>Login</Button>
        <Button className={`btn ${mainVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={registerClick}>Signup</Button>
        </div>
    )
}
