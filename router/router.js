import { pageControllers, projectController } from '../controllers/index.js';
import { getQueryParams, getPathId } from '../helpers/helpers.js';

// const pathDomain = `https://hopeful-lovelace-afd729.netlify.app`;
const pathDomain =  "";

const routes = async (path, params, id) => {
    console.log(path);
    switch (path) {
        case `${pathDomain}/home`: 
            return await pageControllers.getHomePage();
        case `${pathDomain}/about`: 
            return await pageControllers.getAboutPage();
        case `${pathDomain}/game`: 
            return await pageControllers.getGamePage();
        case `${pathDomain}/projects`: 
            return await projectController.getProjectPage();
        case `${pathDomain}/projects/:id${id}`: 
            return await projectController.getDetailPage(id);
        case `${pathDomain}/projects/create`: 
            return await projectController.getCreatePage();
        default: 
        return await pageControllers.getNotFoundPage();
    }
};

export const router = (path) => {
    
    const params = getQueryParams(path);
    const id = getPathId(path);
    routes(path, params, id)
    .then(props => {
        history.pushState({}, null, path);
    })
    .catch(err => console.log(err));
};