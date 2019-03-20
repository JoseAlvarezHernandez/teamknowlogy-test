/**
 * @module connections
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Mongoose connections module
 */

/** Mongoose dependency */
const mongoose = require('mongoose');
/** Environment configurations */
const dbConnections = require('./dbConnections');

/** MongoDB Users connection chain  */
const dnaConnectionChain = dbConnections.dna;

/** Mongoose promises configuration  */
mongoose.Promise = global.Promise;

module.exports = {
    dnaConnectionChain: mongoose.createConnection(dnaConnectionChain, { autoIndex: true })
};