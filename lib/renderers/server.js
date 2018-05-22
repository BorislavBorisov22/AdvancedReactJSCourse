
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import axios from 'axios';
import DataApi from './../state-api/lib/index';
import config from './../config';

const serverRenderer = async () => {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    const api = new DataApi(resp.data);

    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors()
    };

    return ReactDOMServer.renderToString(<App initialData={initialData}/>);
};

export default serverRenderer;