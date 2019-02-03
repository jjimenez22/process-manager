export const BASE_PATH = "http://localhost:8080/api";

const GET_INIT = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

function POST_INIT(body) {
    return {
        method: 'POST',
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

const DELETE_INIT = {
    method: 'DELETE',
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

export function restPost(url, body, callback) {
    fetch(url, POST_INIT(body))
        .then(res => res.json())
        .then(callback)
        .catch(e => console.error("Failed posting data: ", e));
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