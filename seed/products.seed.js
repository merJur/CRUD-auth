const mongoose = require ("mongoose")
const Product = require ("../models/Products")
const PRODUCTS = require ("../data/products.json")

//DB connection

require ("../config/db.config")

mongoose.connection.once("open", () => {
    mongoose.connection.db.dropDatabase()
    .then(() => {
        console.log("DB dropped")
        return Product.create(PRODUCTS)
    })
    .then (createdProducts => {
        console.log ("creating products ............................ 🎁🎁🎁")
        createdProducts.forEach( products => {
            console.log(`${products.name} was created...............👍!`)
        })

// DB closed

        return mongoose.connection.close()
    })
    .then(() => {
        console.log("connection closed");
        process.exit(1)
    })
    .catch( err => {
        console.error(err)
        process.exit(0)
    })
})