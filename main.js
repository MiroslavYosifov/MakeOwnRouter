import 'regenerator-runtime/runtime';
import { preventDefaultOnReloadPage } from './helpers/helpers.js';
import { router } from './router/router.js';

const rootPath = process.env.PATH || 'http://127.0.0.1:8000';

function main (e) {
    preventDefaultOnReloadPage(e);

    if(e.target.href) {
        const currentPath = e.target.href.split(rootPath + '/').join('/');
        router(currentPath)
    };
   
};

document.addEventListener('click', main);

window.addEventListener('load', function(e) {
    //to fix bug with
    const currentPath = location.href.split(`${rootPath}/#/`).join('/');
    router(currentPath);
});
