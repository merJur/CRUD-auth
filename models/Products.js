const mongoose = require ("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        minLength: [3, "product name must contain at least 3 characters"],
    },
    description: {
        type: String,
        required: [true, "product price is required"],
        min: [1, "product minimun price is 1"]
    },
    image: {
        type: String,
        default: "https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png",
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product