const { response } = require("express")
const data = require("../db_files/data.json")

const JokeService = {
    getAll: (req, res) => {
        res.status(200).json(data.jokes);
    },
    getById:(req, res) =>{
        res.status(200).json(data.jokes[req.params.id-1]);
    },
    randomJoke:(req, res) => {
        res.status(200).json(data.jokes[Math.floor(Math.random() * data.jokes.length)])
    }
}
module.exports = JokeService