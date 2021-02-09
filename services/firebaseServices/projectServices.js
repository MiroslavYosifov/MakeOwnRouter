import AJAX from '../AJAX.js';

async function getProjects () {
    return await AJAX.get('https://myblog-60f10-default-rtdb.firebaseio.com/projects/.json');
};

async function getProject (id) {
    return await AJAX.get(`https://myblog-60f10-default-rtdb.firebaseio.com/projects/${id}/.json`);
};

async function postProject (body) {
    return await AJAX.post('https://myblog-60f10-default-rtdb.firebaseio.com/projects/.json', body);;
};

async function updatedProject () {
 
};

async function deleteProject () {

};

export default {
    getProjects,
    getProject,
    postProject,
    updatedProject,
    deleteProject
}