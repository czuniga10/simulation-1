const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

const port = 8080;
app.listen(port, () => { console.log(`=============================\nServer listening on port ${port}\n=============================`); })