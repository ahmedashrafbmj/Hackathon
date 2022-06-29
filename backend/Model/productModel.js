const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
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
    rating: {
        type: Number,
        default: Math.floor(Math.random()*5)
    },
    userId:{
        type:String
    },
    image: {
        type:String
    },
    numOfReviews: {
        type: Number,
        default: Math.floor(Math.random()*99)
    },
    // reviews: [{
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     rating: {
    //         type: Number,
    //         required: true
    //     },
    //     comment: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

module.exports = mongoose.model("Products", productSchema)