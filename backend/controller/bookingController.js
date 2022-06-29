const Booking = require('../Model/bookingModel')

let createBooking = async (req, res) => {
    try {
        let booking = await Booking.create(req.body)
        res.statusCode = 201
        res.send({ messsage: "Booking Successfully Loaded", booking })
    }
    catch (e) {
        if (e.name === "CastError") {
            return res.status(401).send({ success: false, message: `Resource Not Found. Invalid ${e.path}`, status: res.statusCode })
        } else {
            return res.status(401).send({ success: false, message: e.message, status: res.statusCode })
        }
    }
}


let getBookingsDetail = async (req, res) => {
    try{
        let oneBookings = await Booking.findById(req.params.id)
        if (!oneBookings) {
            res.statusCode = 500
            res.send({ success: false, messsage: "Booking Not Found" })
        }
        res.statusCode = 200
        res.send({ success: true, oneBookings })
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

let getAllBookings = async (req, res) => {
    try{
            const getAllBooking = await Booking.find()
            console.log(getAllBooking);
            res.statusCode = 200
            res.send({ messsage: true, getAllBooking })
        }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}


let updateBooking = async (req, res, next) => {
    try{
        let updateBooking = await Booking.findById(req.params.id)
        if (!updateBooking) {
            res.statusCode = 500
            res.send({ success: false, messsage: "Booking Not Found" })
        }
        updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true, userFindAndModify: false
        })
        res.statusCode = 200
        const getBookingAfterUpdate = await Booking.find()
        res.send({ success: true, getBookingAfterUpdate })
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

let deleteBooking = async (req, res, next) => {
    try{
        let delBooking = await Booking.findById(req.params.id)
    
        if (!delBooking) {
            res.statusCode = 500
            res.send({ success: false, messsage: "Booking Not Found" })
        }
        await delBooking.remove()
        const getBookingAfterDel = await Booking.find()
        res.statusCode = 200
        res.send({ success: true, messsage:"Booking Deleted Successfully",getBookingAfterDel})
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

module.exports = { createBooking , getAllBookings, updateBooking, deleteBooking ,getBookingsDetail}