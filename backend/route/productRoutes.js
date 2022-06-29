const express = require('express')
const router = express.Router()
const productCon = require('../controller/productController')
const isAuthUser = require('../middleware/isAuthUser')

router.get('/',productCon.getAllProducts)
router.get('/product/:id',productCon.getProductDetails)
router.post('/new',productCon.createProduct)
router.put('/product/:id',productCon.updateProduct)
router.delete('/product/:id',productCon.deleteProduct)


module.exports = router