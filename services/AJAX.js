const request = async (url, method, body) => {
    let options =  {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };

    if(method !== "GET") options.body = JSON.stringify(body);

    const res = await fetch( url, options);
    const data = await res.json();

    return data;
};

export default {
    get: (url) => request(url, "GET"),
    post: (url, body) => request(url, "POST", body),
    put: (url, body) => request(url, "PUT", body),
    patch: (url, body) => request(url, "PUT", body),
    delete: (url, body) => request(url, "DELETE", body)
};


// mode: 'cors',
// credentials: 'same-origin', // include, *same-origin, omit
