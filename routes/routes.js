const express = require('express')
const router = express.Router()
const services = require("../services/jokeService")

router.get('/getAll', services.getAll)
router.get('/getById/:id', services.getById)
router.get('/random', services.randomJoke)

module.exports = router