const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    comments: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
