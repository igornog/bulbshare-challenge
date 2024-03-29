require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { getFeed } = require('./routes/getFeed');
const { getComments } = require('./routes/getComments');

const app = express();
app.use(cors());

app.get('/feed', getFeed);
app.get('/comments', getComments);
app.use(express.static(path.join(__dirname, 'assets')));

app.listen(4000, function (err) {
  if (err) return err;
  console.log('(HTTP) App now running on port', 4000);
});
