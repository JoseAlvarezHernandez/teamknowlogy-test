/**
 * @module models/DNAs
 * @author Jose de Jesus Alvarez Hernandez
 * @desc API DNAs model
 */

/** Mongoose connections */
const connections = require('../configs/connections');
/** Mongoose dependency */
const mongoose = require('mongoose');
/** Mongoose schema object */
let Schema = mongoose.Schema;

const Dna = {
    dna: { type: Array },
    hasMutation: { type: Boolean }
};

/** Additional configurations */
const configs = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
};

/** User schema object*/
var DNAschema = new Schema(Dna, configs);

/** User model instance */
module.exports = connections.dnaConnectionChain.model('Dna', DNAschema, 'DNAs');