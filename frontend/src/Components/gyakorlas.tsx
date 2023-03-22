import { Button } from "react-bootstrap";


export default function Gyakorlas({value, onGyakorlasClick}:{value:string, onGyakorlasClick:()=>void}) {
    return(
    <>
    <Button className="btn" onClick={onGyakorlasClick}>{value}</Button>
    </>
    )
}