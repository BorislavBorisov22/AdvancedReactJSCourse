class StateApi {

    constructor(rawData) {
        this.rawData = rawData;
        this.data = {
            articles: this.mapIntoObject(this.rawData.articles, 'id'),
            authors: this.mapIntoObject(this.rawData.authors, 'id'),
            searchTerm: '',
            timestamp: new Date()
        };

        this.subscriptions = {};
        this.lastSubscriptionId = 0;
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
        this.mergeWithState({ searchTerm });
    };

    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    };

    unsubscribe = (subId) => {
        delete this.subscriptions[subId];
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

    startClock() {
        setInterval(() => {
            this.mergeWithState({
                timestamp: new Date()
            });
        }, 1000);
    }
}

export default StateApi;