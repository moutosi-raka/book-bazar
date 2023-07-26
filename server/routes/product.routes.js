const router = require("express").Router();
const productController = require("../controllers/product.controller");
const verfyMiddleware = require("../middleware/middleware")

router.get("/list", productController.findAll);
router.get("/list/:id", productController.findDetails);
router.post("/create", verfyMiddleware, productController.create);
router.put("/update/:id", verfyMiddleware, productController.update);
router.delete("/delete/:id", verfyMiddleware, productController.removeOne);

module.exports = router