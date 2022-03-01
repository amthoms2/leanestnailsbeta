const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const path = require('path')
const port = 8080
dotenv.config();
const bookingRoute = require('./routes/booking')

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => console.log(err));

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json()) // format of sending data via key: value pairs
  app.use(express.static(path.join(__dirname, '/public')))
  //use this root folder full of static files every single req and res!

  app.use('/api/booking', bookingRoute)

  app.get('/api/test', ()=>{
    console.log('test is successful')
  })


  app.listen(process.env.PORT || port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })