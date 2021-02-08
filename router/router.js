import { header } from '../templates/header.js';
import { home, about, projects } from '../templates/pages/index.js';

const routes = (currentPath) => {
    switch (currentPath) {
        case '/home':
            home();
            break;
        case '/about':
            about();
            break;
        case '/projects':
            projects();
            break;
        default:
            document.querySelector('main').innerHTML = '<div>Not Found</div>';
            break;
    }
};

const queryParams = (path) => {
    let params = Object.fromEntries(
        path
        .split('?')[1]
        .split('&')
        .map(p => p.split('=')
        ));
    return params;
};

export const router = (path) => {
    
    if(path.includes('?')) {
        let params = queryParams(path);
        routes(path, params);
    } else {
        routes(path);
    }

    
    window.location.hash = path;
    document.querySelector('header').innerHTML = header;
    console.log(path);
    
};

