const express = require('express');
const getDb = require('../database/bootstrap.database');

const apiRouter = express.Router();

apiRouter.get('/get_bins', (req, res) => {
    const db = getDb();
    db.get_bins()
        .then(bins => res.send(bins))
        .catch(err => res.send(err))
});