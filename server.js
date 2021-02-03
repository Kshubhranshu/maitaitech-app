let app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    noAuthRoutes = require('./routesWithoutAuth'),
    config = require('./common/appConfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', noAuthRoutes);

app.use(function (err, req, res, next) {
    return res.status(500)
    .send({ "statusCode": 500, "statusMessage": 'SOMETHING WENT WRONG!' });
});

const PORT = config.APP_PORT;

app.listen(PORT, () => {
    console.log((new Date).toUTCString() + ' App listening on port: ' + PORT);
});
