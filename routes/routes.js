const express = require('express')
const router = express.Router()
const services = require("../services/jokeService")

// CORS
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/**
 * @swagger
 * /getAll:
 *  get:
 *    description: Get all jokes
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/getAll', services.getAll)

 /**
 * @swagger
 * /getById/{id}:
 *   get:
 *     description: Gets a joke by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: A single joke.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
*/
router.get('/getById/:id', services.getById)

/**
 * @swagger
 * /random:
 *  get:
 *    description: Get a random joke
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/random', services.randomJoke)

module.exports = router