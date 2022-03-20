const http = require('http');
const url = require('url');
const fs = require('fs');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

const app = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview
  if (pathName === '/overvivew' || pathName === '/') {
    res.end('Hello From Overview');

    // Product
  } else if (pathName === '/product') {
    res.end('Hello From Product');

    // API
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(dataObj);

    // NotFound
  } else {
    res.writeHead(404);
    res.end('Page Not Found');
  }
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server is Running...');
});
