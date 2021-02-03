let express = require('express'),
    router = express.Router(),
    routes = require('../routesWithoutAuth'),
    service = require('./service');

router.get('/', (req, res) => {
    res.send('Hello! Welcome to our maitaitech-app :-)');
});

router.post('/api', (req, res, next) => {
    service.authenticate(req.body, (data) => {
        res.send(data);
    }).catch(err => {
        console.error('Error in authenticate, with reqData - ', req.body, err);
        return next(err);
    });
});

module.exports = router;