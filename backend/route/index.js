const express = require('express')
const router = express.Router()
const productRoutes = require('./productRoutes')
const userRoutes = require('./userRoutes')
const bookingRoutes = require('./bookingRoutes')

router.use('/products',productRoutes)
router.use('/users',userRoutes)
router.use('/booking',bookingRoutes)

module.exports = router