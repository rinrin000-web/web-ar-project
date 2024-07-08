const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const server = require('https').createServer(
  {
    key: fs.readFileSync('cetificates/key.pem'),
    cert: fs.readFileSync('cetificates//cert.pem'),
    passphrase: 'password',
  },
  app
);
// Phục vụ các tệp tĩnh trong thư mục markers
app.use('/markers', express.static(path.join(__dirname, 'markers')));
// GET
app.get('/', (req, res) => {
//   res.send('Hello World!');
    // const filePath = path.join(__dirname, 'index.html');
    // res.sendFile(filePath);
    res.sendFile(path.join(__dirname,'index.html'));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
