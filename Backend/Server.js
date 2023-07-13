const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(cors()); // Enable CORS

app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://festivesolutions:789bingo123@cluster0.obglovi.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  eventType: String,
});

// Create the booking model
const Booking = mongoose.model("Booking", bookingSchema);

// Handle POST request to /api/bookings
app.post("/api/bookings", (req, res) => {
  const { name, mobileNumber, eventType } = req.body;

  // Create a new booking document
  const newBooking = new Booking({
    name,
    mobileNumber,
    eventType,
  });

  // Save the booking document to the database
  newBooking
    .save()
    .then(() => {
      console.log("Booking saved to database");
      res.json({ message: "Booking successful!" });
    })
    .catch((error) => {
      console.error("Error saving booking to database:", error);
      res.status(500).json({ message: "Booking failed" });
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
