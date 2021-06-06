// import 'regenerator-runtime/runtime';
import { preventDefaultOnReloadPage } from './helpers/helpers.js';
import { router } from './router/router.js';

//const rootPath = process.env.PATH || 'http://192.168.1.100:8000/';
// const rootPath = 'http://192.168.1.100:8000/';
const rootPath = 'http://127.0.0.1:5501/';

function main (e) {
    preventDefaultOnReloadPage(e);

    if(e.target.href) {
        const currentPath = e.target.href.split(rootPath).join('/');
        router(currentPath)
    };
   
};

document.addEventListener('click', main);

window.addEventListener('load', function(e) {

    const currentPath = location.href.split(`${rootPath}`).join('/');
    router(currentPath);
});
