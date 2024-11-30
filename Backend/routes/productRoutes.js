const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add a product
router.post('/add', async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    const newProduct = new Product({ name, description, price, category, stock });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all products
router.get('/list', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;