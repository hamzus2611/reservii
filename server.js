const express = require('express');
const connectDB = require("./config/connectDB")
const user = require('./routes/user')
const event = require('./routes/event')
const ticket = require('./routes/ticket')
const app = express();
connectDB();

app.use(express.json());


const PORT = process.env.PORT || 5000;
app.use('/user', user);
app.use('/event', event);
app.use('/ticket', ticket)

app.listen(PORT, err => err ? console.log(err) : console.log(`serveur running on PORT ${PORT}`));
