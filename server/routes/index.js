const router = require("express").Router();

const productRouter =  require("./product.routes");
const userRouter = require("./user.routes")
const bookingRouter = require("./booking.routes")
const paymentRouter = require("./payments.routes")
const productAdsRouter = require("./productAds.routes")
const reportRouter = require("./report.routes")
const jwtRouter = require("./jwt.routes")
const categoryRouter = require("./category.routes")


router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/booking', bookingRouter);
router.use('/payment', paymentRouter);
router.use('/product/Ads', productAdsRouter);
router.use('/report', reportRouter);
router.use('/jwt', jwtRouter);
router.use('/category', categoryRouter);


module.exports = router;