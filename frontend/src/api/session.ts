
export function getDevice() {
    let deviceId = localStorage.getItem('device');
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('device', deviceId);
    }
    return deviceId;
}

export function setToken(token : string) {
    localStorage.setItem('token', token);
}

export function getToken() {
    return localStorage.getItem('token');
}

export function clearToken(){
    localStorage.removeItem('token');
}
