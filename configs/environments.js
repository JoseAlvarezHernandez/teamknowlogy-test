/**
 * @module config/environments
 * @author Jose de Jesus Alvarez Hernandez
 * @desc App enviroments configurations file
 */

module.exports = {
    development: {
        swaggerDefinition: {
            info: {
                title: 'API',
                version: '1.0.1',
                description: 'RESTFUL API Documentation',
            },
            host: `localhost:3978`,
            basePath: '/',
            tags: [
                { name: 'API' },
            ],
        },
    },
    production: {
        swaggerDefinition: {
            info: {
                title: 'API',
                version: '1.0.1',
                description: 'RESTFUL API Documentation',
            },
            host: 'fintech-api-hackaton.herokuapp.com',
            basePath: '/',
            tags: [
                { name: 'API' },
            ],
        },
    }
}