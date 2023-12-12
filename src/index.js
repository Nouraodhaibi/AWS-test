const express = require("express");

const app = express();
const port = 3005;
let products = [
  { id: 1, title: "iphone 15", price: 480 },
  { id: 2, title: "iphone 16", price: 500 },
  { id: 3, title: "iphone 17", price: 600 },
  { id: 4, title: "iphone 18", price: 700 },
];

app.get("/", (req, res) => {
  res.send("welcome to express server");
});
app.get("/products", (req, res) => {
  res.send({
    products: products,
  });
});
app.get("/products/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  
  if(!product ) {
   return res.status(400).send({message: `product was not found with this id: ${id}`});
  }
  res.send({
    product: product,
  });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
});
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
