const express = require('express');
const router = express.Router();
const sendOtpController = require('../controller/sendOtp');


router.route('/send-otp')
    .post(sendOtpController.sendOtp)


router.route('/verify-otp')
    .post(sendOtpController.verifyOtp)




module.exports = router