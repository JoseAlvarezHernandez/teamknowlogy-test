
/**
 * @module config/dbConnections
 * @author Jose de Jesus Alvarez Hernandez
 * @desc App DB connections configurations file
 */

module.exports = {
    dna: process.env.db || 'mongodb://test:test@ds215370.mlab.com:15370/inncol-test-api',
};