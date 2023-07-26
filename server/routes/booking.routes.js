const router = require("express").Router();
const bookingController = require("../controllers/booking.controller")
const verfyMiddleware = require("../middleware/middleware")

router.get("/list", verfyMiddleware, bookingController.findAll);
router.get("/list/:id", bookingController.findDetails);
router.post("/create", bookingController.create);


module.exports = router
