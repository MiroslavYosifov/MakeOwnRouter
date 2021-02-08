import { header } from '../templates/header.js';
import { pageControllers } from '../controllers/index.js';

const getQueryParams = (path) => {
    return Object.fromEntries( path
                                .split('?')[1]
                                .split('&')
                                .map(p => p.split('=')
                                ));
};

const routes = async (currentPath, currentParams) => {
    switch (currentPath) {
        case '/home': return await pageControllers.getHomePage();
        case '/about': return await pageControllers.getAboutPage();
        case '/projects': return await pageControllers.getProjectPage();
        default: document.querySelector('main').innerHTML = '<div>Not Found</div>'; break;
    }
};

export const router = (path) => {
    const params = path.includes('?') ? getQueryParams(path) : undefined;
    
    routes(path, params)
    .then(props => {
        window.location.hash = path;
        document.querySelector('header').innerHTML = header;
    })
    .catch(err => console.log(err));
};