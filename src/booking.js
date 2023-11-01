import React, { useState } from "react";
import "./App.css";

const Booking = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("");
    setIsFormOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick} className="button">
        BA
      </button>
      {isFormOpen && (
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 999,
              background: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 430,
              height: 300,
              padding: 10,
              background: "pink",
            }} 
          >
            
            <form className="bookingpart" onSubmit={handleSubmit}>
              <h3 className="bookhead">BOOK YOUR APPOINTMENT TODAY!</h3>

              <input className="fnameinput" type="text" placeholder="Full name" />
              <input className="fnuminput" type="tel" placeholder="Phone number" />
              <br />

              <p className="bookingsub">pick a service</p>
              <select className="select">
                <option value="hair">Hair service</option>
                <option value="nail">Nail service</option>
                <option value="eyelash">Eyelash service</option>
                <option value="barber">Barber service</option>
              </select>
              <br />
              <button type="submit" className="submitbook">
                Book now!
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
