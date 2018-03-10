const apiRouter = require('./api.router');

function delegateRoutes(app) {
    app.use('/api', apiRouter);

    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resource at " + req.originalUrl });
    });

    return app;
};

module.exports = delegateRoutes;