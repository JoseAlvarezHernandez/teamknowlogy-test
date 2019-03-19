/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

const mutation = {
    hasMutation
};

function hasMutation(req, res, next) {
    console.log(req);
    res.send(200, { hasMutation: true });
}

module.exports = mutation;