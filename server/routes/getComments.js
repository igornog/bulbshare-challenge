const path = require('path');
const fs = require('fs');

function getComments(req, res) {
  const filePath = path.join(__dirname, '../data/comments.json');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json(JSON.parse(data));
  });
}

module.exports = { getComments };
