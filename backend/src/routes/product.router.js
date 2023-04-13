const express = require("express");
const { productController } = require("../controllers");

const router = express.Router();

router.post("/", productController.createCategory);

router.get("/", productController.findAll);

module.exports = router;
