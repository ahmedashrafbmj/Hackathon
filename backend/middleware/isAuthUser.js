const jwt = require('jsonwebtoken')
const User = require('../Model/userModel')

const isAuthUser =async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            res.status(401).send({ success: false, message: "Login First" })
        }
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(verify.id)
        next()
    }
    catch (e) {
        return res.status(401).send({ success: false, message: e.message, status: res.statusCode })
    }
}
module.exports = isAuthUser
