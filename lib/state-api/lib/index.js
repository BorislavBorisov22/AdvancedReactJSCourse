class StateApi {

    constructor(rawData) {
        this.rawData = rawData;
        this.data = {
            articles: this.mapIntoObject(this.rawData.articles, 'id'),
            authors: this.mapIntoObject(this.rawData.authors, 'id'),
            searchTerm: ''
        };

        this.subscriptions = {};
        this.lastSubscrptionId = 0;
    }

    mapIntoObject(arr, prop) {
        return arr.reduce((acc, current) => {
            acc[current[prop]] = current;
            return acc;
        }, {});
    }

    lookupAuthor(authorId) {
        return this.data.authors[authorId];
    }

    getState() {
        return this.data;
    }

    setSearchTerm = (searchTerm) => {
        this.mergeWithState({searchTerm});
    };

    subscribe = (cb) => {
        this.subscriptions[++this.lastSubscriptionId] = cb;
        return this.lastSubscrptionId;
    };

    mergeWithState = (newState) => {
        this.data = {
            ...this.data,
            ...newState
        };

        this.notifySubscribers();
    };

    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => {
            cb();
        });
    };

    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    };
}

export default StateApi;