import React from 'react';

const Article = ({ article, author }) => {
    return (
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <div>{article.body}</div>

            <div>
                <a href={author.website}>{author.firstName} {author.lastName} </a>
            </div>
        </div>
    );
};

export default Article;