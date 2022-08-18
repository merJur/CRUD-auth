const router = require("express").Router();
const miscController = require("../controllers/miscController");
const productsController = require("../controllers/productController");

//misc
router.get("/", miscController.home);

//products
//list
router.get("/products/store", productsController.list);
//see details
router.get("/products/:id", productsController.details);
//create
router.get("/products/create", productsController.create);
router.post("/products/store", productsController.doCreate);

module.exports = router;
