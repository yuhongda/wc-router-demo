const express = require('express');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { dev, mock, loginTestHost } = require('../config/config');
const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', `http://${dev.host}:${dev.port}`);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method == 'OPTIONS') res.sendStatus(200);
  else next();
});

const defaultExample = require('./routes/defaultExample');
app.use('/defaultExample', defaultExample);

const chartExample = require('./routes/chartExample');
app.use('/chartExample', chartExample);

const formExample = require('./routes/formExample');
app.use('/formExample', formExample);

const emptyExample = require('./routes/emptyExample');
app.use('/emptyExample', emptyExample);

const commonExample = require('./routes/commonExample');
app.use('/common', commonExample);
app.use('/api/common', commonExample);
app.use('/api/reportPage', commonExample);

const SlideEditor = require('./routes/SlideEditor');
app.use('/SlideEditor', SlideEditor);

const reportDetails = require('./routes/reportDetails');
app.use('/reportDetails', reportDetails);

const myReport = require('./routes/myReport');
app.use('/api/report', myReport);
app.use('/api/requirement', myReport);

const myTmpl = require('./routes/myTmpl');
app.use('/api/template', myTmpl);

const library = require('./routes/library');
app.use('/api/material', library);

const reportEditor = require('./routes/reportEditor');
app.use('/reportEditor', reportEditor);

const productMonitor = require('./routes/productMonitor');
app.use('/api/productMonitor', productMonitor);

const marketMonitor = require('./routes/marketMonitor');
app.use('/api/marketMonitor', marketMonitor);

const category = require('./routes/category');
app.use('/api/category', category);
const dataExtractionHistory = require('./routes/dataExtractionHistory');
app.use('/api/dataCollect', dataExtractionHistory);

const insightData = require('./routes/insightData');
app.use('/api/insightData', insightData);

//const dataExtractionRequirement = require('./routes/dataExtractionRequirement');
//app.use('/api/dataExtractionRequirement', dataExtractionRequirement);

//{pages}//

let server = app.listen(mock.express.port, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
