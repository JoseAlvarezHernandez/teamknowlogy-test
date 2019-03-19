/**
 * @module server
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Node JS server.js
 */

/** Express instance */
const express = require('express');
/** Path instance */
const path = require('path');

/** URL instance */
const url = require('url');

/** bodyParser instance */
const bodyParser = require('body-parser');

/** Express Router instance */
const router = express.Router();

/** Swagger JSDoc instance */
const swaggerJSDoc = require('swagger-jsdoc');

/** Express object */
const app = express();

/** Node app enviroment */
const nodeEnv = process.env.NODE_ENV || 'development';

/** Environment configurations */
const envConfigs = require('./configs/environments.js');

/** Node app port */
const port = process.env.port || process.env.PORT || 3978;

/************************************************
 * Swagger doc definition and parameterization
 ************************************************/

/** Swagger options/definition object */
const options = {
    // import swaggerDefinitions
    swaggerDefinition: envConfigs[nodeEnv].swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js'],
};

/** Swagger specification */
const swaggerSpec = swaggerJSDoc(options);

/************************************************
* Express middleware
************************************************/

/** App Access Control configurations */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 5,
    type: 'application/x-www-form-urlencoding',
}));

app.use(bodyParser.json({
    limit: 1024 * 1024,
    type: 'application/json',
}));

app.use(express.static(path.join(__dirname, 'public')));

/************************************************
* Import routes
************************************************/

/** Mutation route */
const mutationRoute = require('./routes/mutation');

/** Stats Route */
//const statsRoute = require('./routes/stats');

// Init get
router.get('/', (req, res) => res.status(200).send({ status: 'up' }));

// serve swagger
router.get('/api/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

/************************************************
* Use routes
************************************************/

app.use(router);
app.use(mutationRoute);
//app.use(statsRoute);
app.use((req, res) => res.status(404).send({ error: 'Method Not Allowed' }));

/************************************************
* Run server
************************************************/

app.listen(port, () => console.log('Server up'));