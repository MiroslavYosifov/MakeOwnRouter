import { pageControllers, projectController } from '../controllers/index.js';
import { getQueryParams, getPathId } from '../helpers/helpers.js';

// const pathDomain = `https://hopeful-lovelace-afd729.netlify.app`;
const pathDomain =  "";

const paths = {
    home: {
        path: '/home',
        controller: pageControllers.getHomePage
    },
    about: {
        path: '/about',
        controller: pageControllers.getAboutPage
    },
    game: {
        path: '/game',
        controller: pageControllers.getGamePage
    },
    // projects: {
    //     path: '/projects',
    //     controller: pageControllers.getProjectPage()
    // }
}



const routes = async (path, params, id) => {

    switch (path) {
        case `${pathDomain}/home`: 
            return await paths.home.controller();
        case `${pathDomain}/about`: 
            return await paths.about.controller();
        case `${pathDomain}/game`: 
            return await paths.game.controller();
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