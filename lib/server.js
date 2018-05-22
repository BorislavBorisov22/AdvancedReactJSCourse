import express from 'express';
import config from './config';
import serverRenderer from './renderers/server';

import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRenderer();
    res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on port ${config.port}...`);
});