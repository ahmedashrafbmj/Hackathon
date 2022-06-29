const User = require('../Model/userModel')
const bcrypt = require('bcryptjs')
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const bcPass = await bcrypt.hash(password, 12)
        const user = await User.create({
            name, email, password: bcPass
        })
        return res.status(201).send({ messsage: "Register Successfully", user })
    }
    catch (e) {
        return res.status(401).send({ success: false, message: e.message, status: res.statusCode })
    }
}

let loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ "email": email }).select("+password")
        const enPass = await bcrypt.compare(password, user.password)
        if (user && enPass) {
            return res.status(200).send({ success: true, user})
        } else {
            return res.status(401).send({ success: false, message: "Invalid Email Or Password" })
        }
    }
    catch (e) {
        return res.status(401).send({ success: false, message: e.message, status: res.statusCode })
    }
}

let logOutUser = (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        res.status(200).send({
            success: false,
            message: "Logged Out"
        })

    }
    catch (e) {
        return res.status(404).send({ success: false, message: e.message, status: res.statusCode })
    }
}

let updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body
        const updated = {
            name, email
        }
        const user = await User.findByIdAndUpdate(req.user.id, updated, { new: true, runValidators: true, isFindAndModify: false })
        res.status(200).send({
            success: true,
            message: "Profile Updated",
            status: res.statusCode,
            user
        })
    }
    catch (e) {
        return res.status(401).send({ success: false, message: e.message, status: res.statusCode })

    }
}

const getAllUser = async (req, res) => {
    try {
        const getUsers = await User.find()
        res.status(200).send({ success: true, message: "Users Fetched", getUsers })
    }
    catch (e) {
        return res.status(401).send({ success: false, message: e.message, status: res.statusCode })

    }
}

const getUserDetails = async (req, res) => {
    console.log(req.user.id);
    const user = await User.findById(req.user._id);
    res.status(200).send({
        success: true,
        user,
    });
}
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(401).send({ success: false, message: "User Doesn't Exist", status: res.statusCode })
        }
        else {
            await user.remove()
            res.status(200).send({ success: true, message: "Users Deleted", user })
        }
    }
    catch (e) {
        return res.status(401).send({ success: false, message: e.message, status: res.statusCode })

    }
}

module.exports = {getUserDetails, registerUser, loginUser, logOutUser, updateProfile, getAllUser, deleteUser }