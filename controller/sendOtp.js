const database = require('../model/otp')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


// send OTP 
const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const data = { email, otp}
        const saveData = database.create(data)

        let config = {
            service: "gmail",
            auth: {
              user: "issacsamalex@gmail.com",
              pass: "rduqtttcjofvygys",
            },
          };
        
        const trasnporter = nodemailer.createTransport(config)

        const mailOptions = {
            from: 'issacsamalex@gmail.com',
            to: email,
            subject: 'Your OTP for verification',
            text: `Your OTP is ${otp}`
        };

       await trasnporter.sendMail(mailOptions, (error) => {
            if(error){
                console.error(error)
                res.status(500).json({ error: 'Error sending otp'})
            } else {
                res.status(200).json({ message: 'OTP send successfully'})
            }
        });

    } catch (error) {
        console.log(error)
    }
};

// Verifying OTP

const verifyOtp = async (req, res) => {
    const { otp } = req.body;

    const matchOtp = await database.findOne({otp})
    
    if(matchOtp){
        res.status(200).json({ message: 'Valid user'})
    }else{
        res.status(200).json({ message: 'User Invalid'})
    }
};


module.exports = {
    sendOtp,
    verifyOtp
}