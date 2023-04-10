import { getToken } from "./session";

const BACKEND_URL = "http://localhost:3001"

export function apiCreator(data : any, responseCallback : Function, errorCallback : Function = (e: any) => {}): any
{
    fetch(BACKEND_URL + '/creator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiLogin(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiCreatorMe(responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/creator/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiQuizMe(responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/quiz/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiQuizPublic(responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/quiz/public', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiQuizGet(id : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/quiz/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiQuizSet(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(Object.fromEntries(data)),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiQuizDel(id : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/quiz/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiRuncode(quizId : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/runcode/' + quizId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiPlay(runcode : string, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/play/' + runcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiTagTop(responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/tag/top', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}

export function apiScoreboard(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    fetch(BACKEND_URL + '/scoreboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(data)),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error));
}
