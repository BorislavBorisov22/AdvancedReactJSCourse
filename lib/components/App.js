import React from 'react';
import { data } from '../testData';
import ArticleList from './ArticleList';
import DataApi from './../state-api/lib/index';
import axios from 'axios';

const api = new DataApi(data);
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    componentDidMount() {
        console.info(axios);
        // axios.get
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