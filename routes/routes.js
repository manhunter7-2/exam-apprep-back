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
 * /:
 *  get:
 *    description: All jokes
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/getAll', services.getAll)

/**
 * @swagger
 * /:
 *  get:
 *    description: Home route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/getById/:id', services.getById)
router.get('/random', services.randomJoke)

module.exports = router