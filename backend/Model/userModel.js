const mongoose = require ('mongoose')
const validator = require ('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Name"],
        maxlength:[20, "Name should be less than 20 characters"],
        minlength:[4, "Name should be greater than 3 characters"]
    },
    email:{
        type:String,
        unique:true,
        validate:[validator.isEmail,"Enter Valid Email"],
        required:[true,"Enter Your Email"]
    },
    password:{
        type:String,
        select:false,
        required:[true,"Enter Your Password"],
        minlength:[4, "Name should be greater than 4 characters"]
    },
    // avatar:{
    //     public_Id: {
    //         type: String,
    //         required: true
    //     },
    //     url: {
    //         type: String,
    //         required: true
    //     }
    // },
    role:{
        type:String,
        default:"user"
    },
    // resetPasswordToken:String,
    // resetPasswordExpire:Date,
})

module.exports = mongoose.model('user',userSchema)