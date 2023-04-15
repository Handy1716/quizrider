import { Button } from "react-bootstrap";
import { PAGES } from "../pages";
import { BoxArrowRight, PersonFillAdd, PersonPlus, PersonPlusFill, PersonSquare } from "react-bootstrap-icons";
//border-bottom border-1 border-warning box-shaddow

export default function Header(
    {page,loggedIn, loginClick,  registerClick, mainClick, logoutClick} : 
    {page : PAGES, loggedIn: boolean, loginClick:() => void, registerClick:() => void, logoutClick:() => void, mainClick: () => void}) {

    const loginVisible = (page !== PAGES.login) && (!loggedIn);
    const signupVisible = (page !== PAGES.register) && (!loggedIn);
    return (
        <div className="square header">
        <img src="images/logo.png" className="logo centering"  onClick={mainClick} alt="logo"/>
        <Button className={`btn ${loginVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={loginClick}><PersonSquare></PersonSquare> Login</Button>
        <Button className={`btn ${signupVisible ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={registerClick}><PersonFillAdd></PersonFillAdd> Signup</Button>
        <Button className={`btn ${loggedIn ? 'd-inline-block btn-header' : 'd-none btn-header'}`} onClick={logoutClick}><BoxArrowRight/> Logout</Button>
        </div>
    )
}
