const ACCESS_TOKEN = 'total-wallet-access-token';

function storeData(data, key) {
    if (!window.sessionStorage || !window.JSON || !key) {
        return;
    }
    sessionStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    if (!window.sessionStorage || !window.JSON || !key) {
        return;
    }
    let item = sessionStorage.getItem(key);

    if (!item) {
        return;
    }

    return JSON.parse(item);
}

function removeData(key) {
    if (!window.sessionStorage || !window.JSON || !key) {
        return;
    }
    sessionStorage.removeItem(key);
}

function storeDataByAccessToken(data) {
    sessionStorage.setItem(ACCESS_TOKEN, JSON.stringify(data));
}

function getDataByAccessToken() {
    let item = sessionStorage.getItem(ACCESS_TOKEN);

    if (!item) {
        return;
    }

    return JSON.parse(item);
}

function removeDataByAccessToken() {
    sessionStorage.removeItem(ACCESS_TOKEN);
}

function clearAccessToken() {
    sessionStorage.removeItem(ACCESS_TOKEN);
}

export {
    storeData,
    getData,
    removeData,
    storeDataByAccessToken,
    getDataByAccessToken,
    removeDataByAccessToken,
    clearAccessToken,
}