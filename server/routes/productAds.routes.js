const router = require("express").Router();
const productAdsController = require("../controllers/productAds.controller");


router.get("/list", productAdsController.findAll);

module.exports = router
