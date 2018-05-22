class StateApi {

    constructor(rawData) {
        this.rawData = rawData;
        this.data = {
            articles: this.mapIntoObject(this.rawData.articles, 'id'),
            authors: this.mapIntoObject(this.rawData.authors, 'id')
        };
    }

    mapIntoObject(arr, prop) {
        return arr.reduce((acc, current) => {
            acc[current[prop]] = current;
            return acc;
        }, {});
    }

    getArticles() {
        return this.data.articles;
    }

    lookupAuthor(authorId) {
        return this.data.authors[authorId];
    }

    getAuthors() {
        return this.data.authors;
    }

    getState() {
        return {
            articles: this.getArticles(),
            authors: this.getAuthors()
        };
    }
}

export default StateApi;