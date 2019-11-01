const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/blueStackFrontend'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/blueStackFrontend/index.html'));
});
app.listen(8080);
