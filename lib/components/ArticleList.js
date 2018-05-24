import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    const articleElements = Object.values(articles).map((article) =>
        <Article
            key={article.id}
            article={article}
        />
    );

    return (
        <div>
            {articleElements}
        </div>
    );
};

export default ArticleList;