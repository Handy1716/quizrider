import { getToken } from "./session";

const BACKEND_URL = "http://localhost:3001"

function _fetch(url: string, params: any, responseCallback : Function, errorCallback : Function = (e: string) => {}): void
{
    fetch(url, params)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then((data : any) => { throw new Error(data?.error || data?.message) });
        }
    })
    .then(data => responseCallback(data))
    .catch(error => errorCallback(error.message));
}

export function apiCreator(data : any, responseCallback : Function, errorCallback : Function = (e: any) => {}): any
{
    _fetch(BACKEND_URL + '/creator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiLogin(data: any, responseCallback: Function, errorCallback: Function = () => {}): void
{
    _fetch(BACKEND_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiCreatorMe(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/creator/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiQuizMe(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/quiz/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiQuizPublic(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/quiz/public', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }, responseCallback, errorCallback);
}

export function apiQuizGet(id : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/quiz/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiQuizSet(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiQuizDel(id : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/quiz/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiRuncode(quizId : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/runcode/' + quizId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiPlay(runcode : string, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/play/' + runcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }, responseCallback, errorCallback);
}

export function apiTagTop(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/tag/top', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }, responseCallback, errorCallback);
}

export function apiScoreboard(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/scoreboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiScoreboardShow(quizId : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch(BACKEND_URL + '/scoreboard/quiz/'+ quizId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }, responseCallback, errorCallback);
}