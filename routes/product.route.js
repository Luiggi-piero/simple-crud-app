//      /api/products

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller.js');
const express = require('express');
const router = express.Router();


router.get('/', getProducts);   //  GET  /api/products
router.get('/:id', getProductById); //  GET   /api/products/123
router.post('/', createProduct);  //  POST  /api/products
router.put('/:id', updateProduct);  //  PUT  /api/products/123
router.delete('/:id', deleteProduct);  //  DELETE  /api/products/123

module.exports = router;