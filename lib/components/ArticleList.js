import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, authors }) => {
    const articleElements = Object.values(articles).map((article) =>
        <Article
            key={article.id}
            article={article}
            author={authors[article.authorId]}
        />
    );

    return (
        <div>
            {articleElements}
        </div>
    );
};

export default ArticleList;