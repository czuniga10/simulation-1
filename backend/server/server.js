const express = require('express');
const addMiddleware = require('./middleware/decorate.middleware');
const delegateRouters = require('./routers/delegate.router');

const app = express();

const port = 8080;
app.listen(port, () => { 
    console.log(`=============================\nServer listening on port ${port}\n=============================`); 
});