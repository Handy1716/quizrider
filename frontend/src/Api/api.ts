
const BACKEND_URL = "http://localhost:3001"

export function apiLogin(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(data)),
    })
    .then(response => {
        if (response.ok)
            return response.json();
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}
