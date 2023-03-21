

export default function Register() {
    return (
    <form action="/creator" method="post">
        <h3>Name:</h3><input name="name" id="name" type="text" /> 
        <h3>Email:</h3><input name="email" id="email" type="text" /> 
        <h3>Password:</h3><input name="password" id="password" type="text" /> 
        <h3>Password again:</h3><input name="password2" id="password2" type="text" />
        <div><button type="submit">Login</button></div>
    </form>
    )
}