const router = require("express").Router()
const miscController = require("../controllers/miscController")



//misc
router.get("/", miscController.home)


module.exports = router