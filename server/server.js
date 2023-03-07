const express = require('express');
const { json, urlencoded } = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

require('dotenv').config();

const router = require('./router/router');

const app = express();

/** Middleware */
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(json());

/** Routes */
app.use('/', router);

/** Heathcheck */
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
});

/** Error Handling */
app.use((req, res, next) => {
    console.log(`${req.path} Route not found!!!`);

    next();
});

const startServer = () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`The server is listening on port ${process.env.PORT ? process.env.PORT : 8000}`);
    });
};

startServer();
