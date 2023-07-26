const router = require("express").Router();
const reportController = require("../controllers/report.controller");


router.post("/create", reportController.create);
router.get("/list", reportController.findAll);
router.delete("/delete/:id", reportController.removeOne);
router.put("/update/:id", reportController.update);

module.exports = router
