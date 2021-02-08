const configs = (method, body) => {
    let configs = {
        method: method,
        mode: 'cors',
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
    }

    if (method !== "GET") configs.body =  JSON.stringify(body);

    return configs;
};

const AJAX = async (url, configs) => {
    const res = await fetch( url, { configs }).catch(err => console.log(err));
    const data = await res.json().catch(err => console.log(err));
    return data;
};

export default {
    get: (url, method = "GET") => AJAX(url, configs(url, method)),
    post: (url, method = "POST") => AJAX(url, configs(url, method)),
    put: (url, method = "PUT") => AJAX(url, configs(url, method)),
    delete: (url, method = "DELETE") => AJAX(url, configs(url, method))
};
