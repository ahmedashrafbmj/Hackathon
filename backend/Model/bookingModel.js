const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: [true, "Enter Product Name"],
        trim: true
    },
    detail: {
        type: String,
        required: [true, "Enter Product Description"],
    },
    price: {
        type: Number,
        required: [true, "Enter Product Price"],
    },
    userId:{
        type:String
    },
    image: {
        type:String
    },
    personName:{
        type:String
    },
    cnic:{
        type:Number
    },
    fromDate:{
        type:String
    },
    toDate:{
        type:String
    },
    number:{
        type:Number
    },
    rooms:{
        type:Number
    },
    days:{
        type:Number
    },
    option:{
        type:String
    },
    cardNo:{
        type:Number
    }
})

module.exports = mongoose.model("Booking", bookingSchema)