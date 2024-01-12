const path = require('path');
const fs = require('fs');

function getFeed(req, res) {
  const start = parseInt(req.query.start) || 0; // Default to 0 if not provided
  const pageSize = parseInt(req.query.pageSize) || 5; // Default to 5 if not provided

  const filePath = path.join(__dirname, '../data/feed.json');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      console.error('ERROR', err);
      return res.status(500).send(err);
    }

    try {
      const jsonData = JSON.parse(data);
      const endIndex = start + pageSize;
      const infiniteData = jsonData.slice(start, endIndex);

      res.json({
        start,
        pageSize,
        data: infiniteData,
      });
    } catch (jsonError) {
      console.error('JSON Parsing Error:', jsonError.message);
      res.status(500).send('Error parsing JSON data');
    }
  });
}

module.exports = { getFeed };
