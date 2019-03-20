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
    try {
        ApiDNACrud.find({}, (err, DNAs) => {
            const count_mutations = DNAs.reduce((total, item) => item.hasMutation ? total + 1 : total, 0),
                count_no_mutation = DNAs.length,
                ratio = count_mutations / count_no_mutation;
            res.status(200).send({ count_mutations, count_no_mutation, ratio });
        });
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
}
    

module.exports = stats;