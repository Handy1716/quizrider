import { Button } from "react-bootstrap";


export default function Header({value, onHeaderClick}:{value:string, onHeaderClick:()=>void}) {
    return(
    <>
    <Button className="btn" onClick={onHeaderClick}>{value}</Button>
    </>
    )
}