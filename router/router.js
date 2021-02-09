import { pageControllers, projectController } from '../controllers/index.js';
import { getQueryParams, getPathId } from '../helpers/helpers.js';

const routes = async (path, params, id) => {
    switch (path) {
        case '/home': 
            return await pageControllers.getHomePage();
        case '/about': 
            return await pageControllers.getAboutPage();
        case '/projects': 
            return await projectController.getProjectPage();
        case `/projects/:id${id}`: 
            return await projectController.getDetailPage(id);
        case '/projects/create': 
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
        window.location.hash = path;
    })
    .catch(err => console.log(err));
};