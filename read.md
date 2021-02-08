function changePath (path) {
    history.pushState("", "", path)
}

function appendTemplate (template) {
    document.querySelector('main').innerHTML = template;
}

function loadLayout (path) {
    switch (path) {
        case 'home':
            appendTemplate(templates.template1);
            changePath(path);
            break;
        case 'about':
            appendTemplate(templates.template2);
            changePath(path);
            break;
        case 'users':
            appendTemplate(templates.template3);
            changePath(path);
          break;
        case 'projects':
            appendTemplate(templates.template4);
            changePath(path);
          break;
        default:
            appendTemplate(templates.template5);
            changePath('/notfound');
     }
      
}

function router (e) {
    if(e.target.getAttribute('href')) {
        e.preventDefault();
    };
    loadLayout(e.target.getAttribute('href'));
}