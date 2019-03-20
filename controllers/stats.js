/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */
const ApiDNACrud = require('./../models/dna');

const stats = {
    getStats
};

function getStats(req, res, next) {
    const count_mutations = 40, count_no_mutation = 100, ratio = count_mutations/count_no_mutation;
    res.status(200).send({ count_mutations, count_no_mutation, ratio});
}

module.exports = stats;