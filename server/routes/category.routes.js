const router = require("express").Router();
const categoryController = require("../controllers/category.controller")

router.get("/list/:id", categoryController.findDetails);
router.get("/list", categoryController.findAll);



module.exports = router