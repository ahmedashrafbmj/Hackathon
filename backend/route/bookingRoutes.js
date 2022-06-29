const express = require('express')
const router = express.Router()
const bookingCon = require('../controller/bookingController')

router.post('/new',bookingCon.createBooking)
router.get('/',bookingCon.getAllBookings)
router.get('/book/:id',bookingCon.getBookingsDetail)
router.put('/edit/:id',bookingCon.updateBooking)
router.delete('/delete/:id',bookingCon.deleteBooking)


module.exports = router