const router = require('express').Router();
const Booking = require('../models/booking');
const mongoose = require('mongoose');

//USER GETS BOOKING
router.get("/find/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER CREATE BOOKING
router.post('/book', async (req, res) => {
  const booking = new Booking({
    name: req.body.Name,
    email: req.body.Email,
    comments: req.body.Comments,
    number: req.body.Number,
  });
  try{
    const savedBooking = await booking.save();
    console.log(savedBooking)
    res.status(201).json(savedBooking)
  } catch(err){
    res.status(500).json(err)
  }
});

//USER CANCELS BOOKING
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER UPDATES BOOKING
router.put("/:id", async (req, res) => {
  console.log('req', req.body)
  const userId = mongoose.Types.ObjectId(req.params.id);
  try {
    const updatedBooking = await Booking.updateOne(
      { _id: userId},
      { $set: req.body},
      { new: true }
    );
    console.log("updatedBooking", updatedBooking);
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
