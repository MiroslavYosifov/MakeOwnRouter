import starWarsServices from '../services/starwarsServices/starwarsServices.js';
import { home, about } from '../templates/pages/index.js';
import { layout } from '../templates/layout.js';

const getHomePage = async () => {
    let data = await starWarsServices.getPerson();
    layout(home(data));
};

const getAboutPage = async () => {
    let data = await starWarsServices.listPersons();
    layout(about(data));
};

export default {
    getHomePage,
    getAboutPage,
}