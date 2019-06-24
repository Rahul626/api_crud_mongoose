const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 1234;

const product = require('./routes/product.route'); // Imports routes for the products

app.use('products', product);

app.listen(port, () => {
    console.log('ok...Server is up and running on port numner ' + port);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://accountUser:password@localhost:27017/monday';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB ,  { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));






