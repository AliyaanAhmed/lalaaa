import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Bookings = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [eventType, setEventType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobileNumber || !eventType) {
      toast.error("Please fill all the form details.");
      return;
    }

    const bookingData = {
      name,
      mobileNumber,
      eventType,
    };

    // Perform the form submission and handle the response
    fetch("http://localhost:3001/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then(() => {
        // Clear form fields
        setName("");
        setMobileNumber("");
        setEventType("");

        // Show success toast message
        toast.success("Thank you for booking us! We will contact you shortly.");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show error toast message
        toast.error("Booking failed. Please try again.");
      });
  };

  return (
    <div className="container bookings">
      <div className="card-booking">
        <div className="card-body">
      <h1 className="text-center">BOOKINGS</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="Enter your Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="form-group custom-dropdown">
          <label htmlFor="eventType">Event Type:</label>
          <select
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate Event">Corporate Event</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      </div>
      </div>
     
    
  );
};

export default Bookings;
