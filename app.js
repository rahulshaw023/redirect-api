const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const baseRoutes = require('./api/routes/base');

app.use(bodyParser.urlencoded({extended: false}));//have different properties which we can extract
app.use(bodyParser.json());                       //and use it to different methods

app.use('/g', baseRoutes);

module.exports = app;
