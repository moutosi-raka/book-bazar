const router = require("express",).Router();
const userController = require("../controllers/user.controller");
const verfyMiddleware = require("../middleware/middleware")


router.get("/list", userController.findAll);
router.get("/role", userController.findUserType);
router.get("/list/:email", userController.findOne);
router.post("/create", userController.create);
router.put("/seller/verify/:id", verfyMiddleware, userController.verify);
router.delete("/delete/:id", userController.removeOne);


module.exports = router