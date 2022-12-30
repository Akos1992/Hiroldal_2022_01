var express = require('express');
const newsDAL = require('../data/news');
var router = express.Router();

router.get('/', (req, res) => {
    newsDAL.readAllNews().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(400).json({ "error": err.message });
    })

});

router.get('/categories', (req, res) => {
    newsDAL.readAllCategories()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ "error": err.message }));
});

router.get('/categories/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    newsDAL.readNewsByCategoryId(categoryId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ "error": err.message }))
});

router.get('/:id', (req, res) => {
    const newsItemId = req.params.id;
    newsDAL.readNewsById(newsItemId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ "error": err.message }))
});

module.exports = router;