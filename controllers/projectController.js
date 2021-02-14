import { router } from '../router/router.js';
import firebaseServices from '../services/firebaseServices/projectServices.js';
import { listProjects, projectCreateForm, project } from '../templates/pages/index.js';
import { layout } from '../templates/layout.js';
import { getFormData } from '../helpers/helpers.js';

// To change buttons with a tags
async function getProjectPage () {

    let data = await firebaseServices.getProjects();

    layout(listProjects(data));
    
    document.getElementById('ctx-projects').addEventListener('click', function(e) {
        const id = e.target.getAttribute('id');
        router(`/projects/:id${id}`);
    });;
};

async function getDetailPage(id) {
    const data = await firebaseServices.getProject(id);
    layout(project(data, id, "details-page"));

    document.getElementById("delete" + id).addEventListener('click', async function(e) {
        await firebaseServices.deleteProject(id);
        router('/projects');
    });
}

async function getCreatePage () {
    layout(projectCreateForm());
    document.getElementById('postProject').addEventListener('click', postProject);
};

async function postProject (e) {
    const body = getFormData(e);
    await firebaseServices.postProject(body);
    router('/projects');
};

export default {
    getProjectPage,
    getCreatePage,
    getDetailPage
};