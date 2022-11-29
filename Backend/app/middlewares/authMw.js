const jwt = require('jsonwebtoken');

function authToken(req, res, next) {
    const token = req.headers('Authorization');
    
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET)
    } else {
        res.sendStatus(403);
    }
}