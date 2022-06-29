const  jwt  = require('jsonwebtoken')
const Product = require('../Model/productModel')
const User = require('../Model/userModel')

    let createProduct = async (req, res) => {
    try{
        let product = await Product.create(req.body)
        res.statusCode = 201
        res.send({ messsage: "Successfully Loaded", product })
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

let getAllProducts = async (req, res) => {
    try{
            const getAllProduct = await Product.find()
            res.statusCode = 200
            res.send({ messsage: true, getAllProduct })
        }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

let getProductDetails = async (req, res) => {
    try{
        let getProduct = await Product.findById(req.params.id)
        if (!getProduct) {
            res.statusCode = 500
            res.send({ success: false, messsage: "Product Not Found" })
        }
        res.statusCode = 200
        res.send({ success: true, getProduct })
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

let updateProduct = async (req, res, next) => {
    try{
        let getProduct = await Product.findById(req.params.id)
        if (!getProduct) {
            res.statusCode = 500
            res.send({ success: false, messsage: "Product Not Found" })
        }
        updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true, userFindAndModify: false
        })
        res.statusCode = 200
        const getDataAfterUpdate = await Product.find()
        res.send({ success: true, getDataAfterUpdate })
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

let deleteProduct = async (req, res, next) => {
    try{
        let getProduct = await Product.findById(req.params.id)
    
        if (!getProduct) {
            res.statusCode = 500
            res.send({ success: false, messsage: "Product Not Found" })
        }
        await getProduct.remove()
        const getDataAfterDel = await Product.find()
        res.statusCode = 200
        res.send({ success: true, messsage:"Product Deleted Successfully",getDataAfterDel })
    }
    catch(e){
        if(e.name === "CastError"){
            return res.status(401).send({success:false,message:`Resource Not Found. Invalid ${e.path}`,status:res.statusCode})
        }else{
        return res.status(401).send({success:false,message:e.message,status:res.statusCode})
        }
    }
}

module.exports = { getAllProducts, createProduct, updateProduct , deleteProduct , getProductDetails}