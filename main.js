import { preventDefaultOnReloadPage } from './helpers/helpers.js';
import { router } from './router/router.js';

const rootPath = 'http://127.0.0.1:8000/'

function main (e) {
    preventDefaultOnReloadPage(e);
    if(e.target.href) {
        const currentPath = e.target.href.split(rootPath).join('/');
        router(currentPath)
    };
   
};

document.addEventListener('click', main);

window.addEventListener('load', function(e) {
    //to fix bug with path
    const currentPath = location.href.split('http://127.0.0.1:8000/#/').join('/');
    router(currentPath);
});
