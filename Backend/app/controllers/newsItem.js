var express = require('express');
const newsDAL = require('../data/news');
var router = express.Router();

router.get('/', (req, res) => {
    newsDAL.readAllNews().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(400).json({"error":err.message});
    })
});

router.get('/:id', (req, res) => {
    const newsItemId = req.params.id;
    res.send(`News item with id ${newsItemId}`);
});

module.exports = router;