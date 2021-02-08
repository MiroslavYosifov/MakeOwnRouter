import AJAX from '../AJAX.js';

const listProjects = async () => {
    let data = await AJAX.get('https://myblog-60f10-default-rtdb.firebaseio.com/projects/.json');
    return data;
};

const getProject = async () => {
    // let data = await AJAX.get('https://myblog-60f10-default-rtdb.firebaseio.com/projects/.json');
    // return data;
};

const postProject = async (body) => {
    await fetch('https://myblog-60f10-default-rtdb.firebaseio.com/projects/.json', {
    method: "POST",
    // mode: 'cors',
    // credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"name":"hrehregre","githubUrl":"5h5","projectUrl":"h54h","descripion":"54h5","imageUrl":"h54"})
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        });
    
    
    // let data = await AJAX.post('https://myblog-60f10-default-rtdb.firebaseio.com/projects/.json', body);
    //return data;
};

const updatedProject = async () => {
 
};

const deleteProject = async () => {

};

export default {
    listProjects,
    getProject,
    postProject,
    updatedProject,
    deleteProject
}