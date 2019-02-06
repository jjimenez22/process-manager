export const BASE_URI = "http://localhost:8080";
export const BASE_PATH = BASE_URI + "/api";
export const USER_BY_ROLE_PATH = BASE_PATH + "/users/search/findAllByRole?role=END_USER";

const GET_INIT = {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Accept': 'application/json'
    }
};

function POST_INIT(body) {
    return {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body),
        headers:
            {
                'Accept':
                    'application/json',
                'Content-Type':
                    'application/json'
            }
    };
}

const POST_INIT_NO_BODY = {
    method: 'POST',
    credentials: 'include'
};

function PUT_INIT(body) {
    return {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(body),
        headers:
            {
                'Accept':
                    'application/json',
                'Content-Type':
                    'application/json'
            }
    };
}

function PUT_INIT_TEXT(body) {
    return {
        method: 'PUT',
        credentials: 'include',
        body: uriList(body),
        headers:
            {
                'Accept':
                    'application/json',
                'Content-Type':
                    'text/uri-list'
            }
    };
}

function uriList(uris) {
    let result = "";
    uris.forEach(uri => {
        result += uri + '\n'
    });
    return result;
}

const DELETE_INIT = {
    method: 'DELETE',
    credentials: 'include',
    headers: new Headers()
};

export function restGet(url, callback) {
    fetch(url, GET_INIT)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status.toString());
            }
        })
        .then(callback)
        .catch(e => {
            console.error('Failed fetching data: ', e);
        });
}

export function restPost(url, body, callback, failed) {
    fetch(url, POST_INIT(body))
        .then(res => res.json())
        .then(callback)
        .catch(e => {
            console.error("Failed posting data: ", e);
            failed("An error ocured saving data");
        });
}

export function restPostNoBody(url, callback, failed) {
    fetch(url, POST_INIT_NO_BODY)
        .then(callback)
        .catch(e => {
            console.error("Failed posting data: ", e);
            failed();
        });
}

export function restPut(url, body, callback) {
    fetch(url, PUT_INIT(body))
        .then(res => res.json())
        .then(callback)
        .catch(e => console.error("Failed putting data: ", e));
}

export function restPutUris(url, body, callback) {
    fetch(url, PUT_INIT_TEXT(body))
        .then(callback)
        .catch(e => console.error("Failed putting data: ", e));
}

export function restDelete(url, callback) {
    fetch(url, DELETE_INIT)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status.toString());
            }
        })
        .then(callback)
        .catch(e => {
            console.error('Failed deleting data: ', e);
        });
}