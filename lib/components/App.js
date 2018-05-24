import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

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
        this.setState(this.props.store.getState());
    };

    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
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
        if (searchTerm) {
            articles = pickBy(articles, (value) => {
                return value.title.match(searchTerm) || value.body.match(searchTerm);
            });
        }

        return (
            <div>
                <SearchBar doSearch={this.props.store.setSearchTerm} />
                <ArticleList articles={articles} store={this.props.store} />
            </div>
        );
    }
}