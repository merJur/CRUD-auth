const Product = require("../models/Products")
const createError = require("http-errors")


//list products
module.exports.list = (res, req, next) => {
    Product.find()
    .then((products) => {
        res.render("products/store", {products})
    })
    .catch((err) => next (err))
} 

//create product
module.exports.create = (req, res, next) => {
    res.render("products/form")
}

module.exports.doCreate = (req, res, next) => {
    Product.create(req.body)
    .then((product) => {
        res.redirect(`/products/${product._id}`)
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
}

//see details
module.exports.details = (res, req, next) => {
    const {id} = req.params

    Product.findById(id)
    .then((product) => {
        res.render("products/details", {product})
    })
    .catch((err) => {
        console.log(err)
        next(createError(404, "product not found"))
    })
}
