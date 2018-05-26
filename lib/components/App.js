import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import TimeStamp from './Timestamp';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const { store } = this.props;

        this.state = store.getState();
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    onStoreChange = () => {
        this.extractStateFromStore(this.props.store.getState());
    };

    extractStateFromStore = (storeState) => {
        this.setState({
            articles: storeState.articles,
            authors: storeState.articles,
            searchTerm: storeState.searchTerm
        });
    };

    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
    }

    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId);
    }

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        let { articles, searchTerm } = this.state;
        const searchTermRE = new RegExp(searchTerm, 'i');

        if (searchTerm) {
            articles = pickBy(articles, (value) => {
                return value.title.match(searchTermRE) || value.body.match(searchTermRE);
            });
        }

        return (
            <div>
                <TimeStamp />
                <SearchBar />
                <ArticleList articles={articles} store={this.props.store} />
            </div>
        );
    }
}