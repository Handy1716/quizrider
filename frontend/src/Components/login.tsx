
export default function Login() {
    return (
            <form action="/login" /* ezen kell javitani */ method="post"> 
            <h3>Name:</h3><input name="email" id="email"></input>
            <h3>Password:</h3><input name="password" id="password"></input>
            <div><button type="submit">Login</button></div>
            </form>
    )
}