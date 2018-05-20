import express from 'express';
import { port } from './config';
import serverRenderer from './renderers/server';

import data from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initialContent = serverRenderer();
    res.render('index', { initialContent });
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(port, function listenHandler() {
    console.info(`Running on port ${port}...`);
});