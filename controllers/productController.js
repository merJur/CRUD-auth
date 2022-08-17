const Product = require("../models/Products")
const createError = require("http-errors")


//list 
module.exports.list = (res, req, next) => {
    Product.find()
    .then((product) => {
        res.render("product/store", {products})
    })
    .catch((err) => next (err))
} 

//create product
module.exports.create = (req, res, next) => {
    res.render("products/form")
}

