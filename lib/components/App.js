import React from 'react';
import ArticleList from './ArticleList';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const { articles, authors } = this.props.initialData;

        this.state = {
            articles,
            authors
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