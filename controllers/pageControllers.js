import starWarsServices from '../services/starwarsServices.js';
import renderPageTemplate from '../templates/pages/index.js';


const getHomePage = async () => {
    let data = await starWarsServices.getPerson();
    renderPageTemplate.home(data);
};

const getAboutPage = async () => {
    let data = await starWarsServices.getFirebaseInfo();
    renderPageTemplate.about();
};

const getProjectPage = async () => {
    let data = await starWarsServices.listPersons();
    renderPageTemplate.project(data);
};


export default {
    getHomePage,
    getAboutPage,
    getProjectPage
}