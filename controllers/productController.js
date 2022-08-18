const Product = require("../models/Products");
const createError = require("http-errors");

//list products
module.exports.list = (req, res, next) => {
  Product.find()
    .then((products) => {
        console.log("entra aquí??")
      res.render("home", { products });
    })
    .catch((err) => next(err));
};

//create  new product
module.exports.create = (req, res, next) => {
  res.render("products/form");
};

module.exports.doCreate = (req, res, next) => {
  Product.create(req.body)
    .then((createdProduct) => {
        console.log("producto creado");
      res.redirect(`products/store`);
    })
    .catch((err) => {
      console.log("error al crear producto");
      next(err);
    });
};

//see details
module.exports.details = (req, res, next) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      res.render("products/details", { product });
    })
    .catch((err) => {
      console.log("error details");
      next(createError(404, "product not found"));
    });
};
