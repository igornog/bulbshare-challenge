const path = require('path');
const fs = require('fs');

function getComments(req, res) {
  const briefRef = req.query.briefRef;
  const filePath = path.join(__dirname, '../data/comments.json');

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      console.error('ERROR', err);
      return res.status(500).send(err);
    }

    let comments = JSON.parse(data);
    // get comments with specified briefRef
    comments = comments.filter((comment) => comment.briefref === briefRef);

    res.json(comments);
  });
}

module.exports = { getComments };
