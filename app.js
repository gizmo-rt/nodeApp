/**
 * Created by pawan on 11/9/17.
 */
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');
var app = express();
var port = process.env.PORT || 3000;
var config = require('./config');
var setupController = require('./controllers/route');
var apiController = require('./controllers/apiController');
var logDirectory = path.join(__dirname, 'log');
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
app.use(morgan(':date[web] - :http-version - :remote-addr :method :url :status - :response-time ms', {stream: accessLogStream}));
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);
app.listen(port);
