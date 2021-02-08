const get = async (url, method) => {
    const res = await fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await res.json();
    console.log(data);
    return data;
}

function post (url, method, body) {

}

function put (url, method, body, id) {

}

function delet (url, method, body, id) {

}

export default {
    get,
}

// async (url, method, props) => {
//     const res = await fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     const data = await res.json();
//     return data;
// };
