const express = require('express');
const routesHandler = require('./routes/handler.js');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);


const PORT = 5000; // backend routing port
app.listen(PORT, () => {
    console.log("server on port" ${port});
    console.log("test branching");
    console.log("test branching  2");
})