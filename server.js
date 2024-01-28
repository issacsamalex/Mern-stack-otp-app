require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const otpRoute = require('./routes/sendOtp')




const PORT = process.env.PORT;

// connect to db
const newConnectDB = async () => {
    try {
        await connectDB()
    } catch (error) {
        console.log(error)
    }
}

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());



//Routes
app.use('/api/user', otpRoute);






app.use(express.static(path.join(__dirname, './client/otp-app/build')));
app.get('*', function (_, res){
    res.sendFile(path.join(__dirname, './client/otp-app/build/index.html'), function(error){
        res.status(500).send(error);
    })
})








newConnectDB().then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
})