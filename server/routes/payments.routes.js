const router = require("express").Router();
const paymentController = require("../controllers/payments.controller");


router.post("/create", paymentController.create);
router.post("/create/intent", paymentController.createPyaymentIntent);

module.exports = router
