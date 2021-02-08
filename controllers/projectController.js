import firebaseServices from '../services/firebaseServices/projectServices.js';
import renderPageTemplate from '../templates/pages/index.js';

const getProjectPage = async () => {
    let data = await firebaseServices.listProjects();
    console.log(data);
    renderPageTemplate.project(data);
};

const getCreatePage = async () => {
    renderPageTemplate.projectCreateForm();

    document.getElementById('postProject').addEventListener('click', async function (e){
        let body = {};
        [...e.target.parentElement.querySelectorAll('input')].map(input => {
            body[input.name] = input.value;
        });

        const data = await firebaseServices.postProject(body); 
        console.log(data);
    });
};

export default {
    getProjectPage,
    getCreatePage
}