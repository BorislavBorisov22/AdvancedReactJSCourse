import React from 'react';
import ArticleList from './ArticleList';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const { store } = this.props;

        this.state = {
            articles: store.getArticles(),
            authors: store.getAuthors()
        };
    }

    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId]
    };

    render() {
        return (
            <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
        );
    }
}