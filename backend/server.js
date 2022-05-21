import express from 'express';
import dotenv from 'dotenv';
import data from './data.js';

const app = express();
dotenv.config();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Server started on port ${port} ...`);
});
