import AJAX from './AJAX.js';

const getPerson = async () => {
    // request to API
    let data = await AJAX.get('https://swapi.dev/api/people/1/', 'GET');
    return data;
};

const listPersons = async () => {
    // request to API
    let data = await AJAX.get('https://swapi.dev/api/people/', 'GET');
    return data;
};

export default {
    getPerson,
    listPersons
}