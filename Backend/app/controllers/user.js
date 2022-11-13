var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("All users");
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with id ${userId}`);
});

module.exports = router;