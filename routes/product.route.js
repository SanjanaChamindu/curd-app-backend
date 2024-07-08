const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProductById, updatedProduct, deleteProduct} = require('../controllers/product.controller');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/', getProductById);
router.put('/:id', updatedProduct);
router.delete(':id', deleteProduct);

module.exports = router;