import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, articleActions }) => {
    const articleElements = Object.values(articles).map((article) =>
        <Article
            key={article.id}
            article={article}
            actions={articleActions}
        />
    );

    return (
        <div>
            {articleElements}
        </div>
    );
};

export default ArticleList;