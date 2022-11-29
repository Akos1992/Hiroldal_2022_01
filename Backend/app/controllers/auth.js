const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');


function generateAccessToken(userName, secret) {
    return jwt.sign(userName, secret, {
        expiresIn: '1800s'
    })
}

router.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    // TODO: .env
    const secret = process.env.TOKEN_SECRET;
    const token = generateAccessToken(userName, secret);
    res.json(token);

});


module.exports = router;