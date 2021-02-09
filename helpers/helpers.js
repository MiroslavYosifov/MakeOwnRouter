export function preventDefaultOnReloadPage (e) {
    if(e.target.getAttribute('href') || e.target.getAttribute('type') === "submit" || e.target.nodeName === "BUTTON") {
        e.preventDefault();
    };
};

export function getPathId (path) {
    if(path.includes(':id')) {
        const parts = path.split(':id');
        const id = parts[parts.length-1];
        return id;
    } else {
        return undefined
    }
};

export function getQueryParams (path) {
    if(path.includes('?')) {
        return Object.fromEntries( path
            .split('?')[1]
            .split('&')
            .map(p => p.split('=')
            ));
    } else {
        return undefined;
    }
    
};

export function getFormData (e) {
    if(e.target.parentElement.nodeName === "FORM") {
        let body = {};
        [...e.target.parentElement.querySelectorAll('input')].map(input => {
            body[input.name] = input.value;
        });
        return body;
    } else {
        throw new Error('Element is not from type <Form>');
    }
};
