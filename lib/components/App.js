import React from 'react';
import ArticleList from './ArticleList';
import DataApi from './../state-api/lib/index';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const { articles, authors } = this.props.initialData;

        this.state = {
            articles,
            authors
        };
    }

    async componentDidMount() {
        const rawData = await axios.get('/data');
        const api = new DataApi(rawData.data);

        this.setState({
            articles: api.getArticles(),
            authors: api.getAuthors()
        });
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