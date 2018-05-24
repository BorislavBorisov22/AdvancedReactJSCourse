import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const { store } = this.props;

        this.state = store.getState();
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId]
    };

    render() {
        return (
            <ArticleList articles={this.state.articles} store={this.props.store} />
        );
    }
}