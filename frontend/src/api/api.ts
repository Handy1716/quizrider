import { getToken } from "./session";

function _fetch(url: string, params: any, responseCallback : Function, errorCallback : Function = (e: string) => {}): void
{
    fetch(process.env.REACT_APP_BACKEND_URL + url, params)
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
    _fetch('/creator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiLogin(data: any, responseCallback: Function, errorCallback: Function = () => {}): void
{
    _fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiCreatorMe(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/creator/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiQuizMe(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/quiz/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiQuizPublic(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/quiz/public', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }, responseCallback, errorCallback);
}

export function apiQuizGet(id : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/quiz/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiQuizSet(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/quiz', {
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
    _fetch('/quiz/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiRuncode(quizId : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/runcode/' + quizId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    }, responseCallback, errorCallback);
}

export function apiPlay(runcode : string, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/play/' + runcode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }, responseCallback, errorCallback);
}

export function apiTagTop(responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/tag/top', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }, responseCallback, errorCallback);
}

export function apiScoreboard(data : any, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/scoreboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }, responseCallback, errorCallback);
}

export function apiScoreboardShow(quizId : number, responseCallback : Function, errorCallback : Function = () => {}): any
{
    _fetch('/scoreboard/quiz/'+ quizId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }, responseCallback, errorCallback);
}