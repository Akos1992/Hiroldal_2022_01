var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("All news");
});

router.get('/:id', (req, res) => {
    const newsItemId = req.params.id;
    res.send(`News item with id ${newsItemId}`);
});

module.exports = router;