class DataApi {

    constructor(rawData) {
        this.rawData = rawData;
    }

    mapIntoObject(arr, prop) {
        return arr.reduce((acc, current) => {
            acc[current[prop]] = current;
            return acc;
        }, {});
    }

    getArticles() {
        return this.mapIntoObject(this.rawData.articles, 'id');
    }

    getAuthors() {
        return this.mapIntoObject(this.rawData.authors, 'id');
    }
}

export default DataApi;