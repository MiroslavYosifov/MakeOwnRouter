import { header, footer } from './shared/index.js';

export const layout = async (body) => {
    let wrapper = `
        ${header()} 
        ${body}
        ${footer()}`;

    document.querySelector('body').innerHTML = `<div class="wrapper">${wrapper}</div>`
};