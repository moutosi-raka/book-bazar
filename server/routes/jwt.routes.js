const router = require("express").Router();
const jwtController = require("../controllers/jwt.controller");


router.get("/list", jwtController.findOne);

module.exports = router