import { data } from '../testData';
import StateApi from './../state-api/lib/index';

const api = new StateApi(data);
describe('DataApi', () => {
    it('exposes articles as an object', () => {
        const articles = api.getArticles();
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toEqual(articleTitle);
    });

    it('exposts authors as an object', () => {
        const authors = api.getAuthors();
        const authorId = data.authors[0].id;
        const authorFirstName = data.authors[0].firstName;

        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toEqual(authorFirstName);
    });
});