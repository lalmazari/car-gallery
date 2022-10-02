const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const fileUpload = require('express-fileupload');
require('dotenv').config()

const pageRoute = require('./routes/pageRoute')
const photoRoute = require('./routes/photoRoute')

const app = express()

//connect DB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.z6w1qlr.mongodb.net/photos?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
}).then(()=> {
  console.log('DB CONNECTED!')
}).catch((err)=> {
  console.log(err)
})


//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());   





//Template Engine
app.set('view engine', 'ejs')

//Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//Route
app.use('/', pageRoute);
app.use('/', photoRoute);

const port = process.env.PORT || 5151;
app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});