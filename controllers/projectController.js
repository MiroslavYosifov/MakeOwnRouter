import firebaseServices from '../services/firebaseServices/projectServices.js';
import { project, projectCreateForm, } from '../templates/pages/index.js';
import { layout } from '../templates/layout.js';

const getProjectPage = async () => {
    let data = await firebaseServices.listProjects();
    layout(project(data))
};

const getCreatePage = async () => {
    layout(projectCreateForm());

    document.getElementById('postProject').addEventListener('click', async function (e){
        let body = {};
        [...e.target.parentElement.querySelectorAll('input')].map(input => {
            body[input.name] = input.value;
        });
        const data = await firebaseServices.postProject(body); 
        getProjectPage();
    });
};

export default {
    getProjectPage,
    getCreatePage
}