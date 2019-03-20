/** 
 * @module routes/mutations 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation API routes  
 */
/** Express dependency */
const express = require('express');

/** Route for API */
const route = '/api/mutation';

/** Router dependency */
const router = express.Router();

const mutation = require('../controllers/mutation');

/**
 * @swagger
 * definitions:
 *   error:
 *     properties:
 *       code:
 *         type: integer
 *       message:
 *         type: string
 */
/**
* @swagger
* definitions:
*   DNAObject:
*     properties:
*       dna:
*         type: array   
*         items: 
*           type: string
*/
/**
 * @swagger
 * definitions:
 *   APISuccess:
 *     properties:
 *       message:
 *         type: boolean
 */
/**
* @swagger
* /api/mutation:
*   post:
*     tags:
*       - Mutations
*     description: Indicates if a DNA has been mutated
*     produces:
*       - application/json
*     parameters:
*       - name: dna
*         description: DNA object
*         in: body
*         required: true
*         schema:
*           $ref: '#/definitions/DNAObject'
*     responses:
*       200:
*         description: Successful request
*         schema:
*           $ref: '#/definitions/APISuccess'
*       400:
*         description: Bad request
*         schema:
*           $ref: '#/definitions/error'
*       401:
*         description: Unauthorized access
*         schema:
*           $ref: '#/definitions/error'
*       404:
*         description: Resource not found
*         schema:
*           $ref: '#/definitions/error'
*/
router.post(route, mutation.hasMutation);

module.exports = router;