const router = require("express").Router()
const miscController = require("../controllers/miscController")
const productsController = require("../controllers/productController")


//misc
router.get("/", miscController.home)

//products
router.get("/products/store", productsController.list)


module.exports = router