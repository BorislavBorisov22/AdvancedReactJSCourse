import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, store }) => {
    const articleElements = Object.values(articles).map((article) =>
        <Article
            key={article.id}
            article={article}
            store={store}
        />
    );

    return (
        <div>
            {articleElements}
        </div>
    );
};

export default ArticleList;