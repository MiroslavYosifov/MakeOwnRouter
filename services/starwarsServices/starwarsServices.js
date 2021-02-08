import AJAX from '../AJAX.js';

const getPerson = async () => {
    let data = await AJAX.get('https://swapi.dev/api/people/1/');
    return data;
};

const listPersons = async () => {
    let data = await AJAX.get('https://swapi.dev/api/people/');
    return data;
};

export default {
    getPerson,
    listPersons,
}