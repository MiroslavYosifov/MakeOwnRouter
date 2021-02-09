import starWarsServices from '../services/starwarsServices/starwarsServices.js';

import { home, about, notfound } from '../templates/pages/index.js';
import { layout } from '../templates/layout.js';

async function getHomePage () {
    let data = await starWarsServices.getPerson();
    layout(home(data));
};

async function getAboutPage () {
    let data = await starWarsServices.listPersons();
    layout(about(data));
};

async function getNotFoundPage () {
    let data = await starWarsServices.listPersons();
    layout(notfound(data));
};

export default {
    getHomePage,
    getAboutPage,
    getNotFoundPage
}