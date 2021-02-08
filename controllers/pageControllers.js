import starWarsServices from '../services/starwarsServices/starwarsServices.js';
import renderPageTemplate from '../templates/pages/index.js';


const getHomePage = async () => {
    let data = await starWarsServices.getPerson();
    renderPageTemplate.home(data);
};

const getAboutPage = async () => {
    let data = await starWarsServices.listPersons();
    renderPageTemplate.about(data);
};

export default {
    getHomePage,
    getAboutPage,
}