const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/songDB', {useNewUrlParser: true}).catch(error => {
    console.log(error);
});
mongoose.set('useCreateIndex', true);

//define body form to JSON
app.use(bodyParser.json());

app.use(cors());

//initialize routes
app.use(require('./routes/api'));

//error handling
app.use((err, req, res, next) => {
    res.status(422).send(err.message);
});

//listen for requests
app.listen(3000, err => {
    if(err) {
        console.log(err);
    }
    console.log('app listening on port 3000');
});