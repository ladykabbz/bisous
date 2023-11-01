import React from "react";
import Booking from "./booking";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./Appointment";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";

import nails from "./images/nails.jpg";
import gram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import gmail from "./images/gmail.png";

import salon2 from "./images/salon2.jpg";

import salon4 from "./images/salon4.jpg";
import salon5 from "./images/salon5.jpg";
import salon6 from "./images/salon6.jpg";
import salon7 from "./images/salon7.jpg";
import salon8 from "./images/salon8.jpg";


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            BISOU BEAUTY BAR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="intro">
        <div className="container">
          <h2 className="one">masterpiece to beauty</h2>

          <Booking />
        </div>
      </div>
      <div className="phase1">
      <div className="container">
        <div className="about">
          <div className="row">
            <div className="col-lg-6">
              <h1 id="services">OUR SERVICES</h1>
              <p>
                We offer a serene and tranquil space of indulgent
                beautification, with unrivalled access to exclusive treatments
                and must have products, from the world’s most innovative beauty
                brands. Our services range from, nail and hair care, barbering,
                exclusive eyelash services and lots more. Feel like indulging in
                a luxurious scalp massage? We can help with that too! During
                your visit, settling into your chair and relax with a magazine
                and a complementary glass of champagne on us - We are at your
                service and want to make you feel pampered, refreshed and fully
                beautified. Drop in or book today!
              </p>
            </div>


            <div className="col-lg-6">
              <img
                src={nails}
                alt="nails"
                width={400}
                height={400}
                className="nailsimg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>HAIR CARE</h3>
            <hr />

            <div className="row">
              <div className="col-6">
                <h5>LADIES CUT</h5>
              </div>
              <div className="col-6">
                <h5>KSH 4000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>GIRLS CUT</h5>
              </div>
              <div className="col-6">
                <h5>KSH 2000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>WASH AND SET</h5>
              </div>
              <div className="col-6">
                <h5>KSH 2000</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>HAIR EXTENSION</h3>
            <hr />
            <div className="row">
              <div className="col-6">
                <h5>WEAVING</h5>
              </div>
              <div className="col-6">
                <h5>KSH 4500</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>WIG INSTALLMENT</h5>
              </div>
              <div className="col-6">
                <h5>KSH 6000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>BRAIDING</h5>
              </div>
              <div className="col-6">
                <h5>KSH 3000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>MANICURE</h3>
            <hr />

            <div className="row">
              <div className="col-6">
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>DRY MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1500</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>FRENCH MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 2000</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>PEDICURE</h3>
            <hr />
            <div className="row">
              <div className="col-6">
                <h5>SHELLAC PEDICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 3000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>EXPRESS PEDICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1500</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>CLASSIC PEDICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 2000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="button">
        {" "}
        <a
          className="link"
          href="https://drive.google.com/file/d/14DgR0v610bJ04e75ukFDfO873zjM4_b_/view"
        >
          VIEW FULL PRICE LIST
        </a>{" "}
        
      </button>
      <br />
        <br />
      </div>
      <div className="gallery" id="gallery">
        <h2 className="galleryheading"> BISOU GALLERY</h2>
        <p>
          We are excited to welcome you to our beauty salon, bringing a touch of
          London to Nairobi! 🥂
        </p>
        <div className="container">
          <div className="row">
<div className="col-sm-2">
<img
                src={salon2}
                alt="nails"
                width={200}
                height={200}
                className="nailsimg"
              />
</div>
<div className="col-sm-2">
<img
                src={salon8}
                alt="nails"
                width={200}
                height={200}
                className="nailsimg"
              />
</div>
<div className="col-sm-2">
<img
                src={salon4}
                alt="nails"
                width={200}
                height={200}
                className="nailsimg"
              />
</div>
<div className="col-sm-2">
<img
                src={salon5}
                alt="nails"
                width={200}
                height={200}
                className="nailsimg"
              />
</div>
<div className="col-sm-2">
<img
                src={salon6}
                alt="nails"
                width={200}
                height={200}
                className="nailsimg"
              />
</div>
<div className="col-sm-2">
<img
                src={salon7}
                alt="nails"
                width={200}
                height={200}
                className="nailsimg"
              />
</div>
          </div>
        </div>
      </div>

      <h1 className="contactheading">Contact Us</h1>
      <p className="contactp">We are here to help you😊</p>

      <form>
        <div className="form-field">
          <input
          className="nameinput"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="FULL NAME"
            required
          />
        </div>

        <div className="form-field">
          <input
          className="emailinput"
            type="email"
            id="email"
            name="email"
            placeholder="EMAIL ADDRESS"
            required
          />
        </div>

        <div className="form-field">
          <input
          className="phoneinput"
            type="tel"
            id="phone"
            name="phone"
            placeholder="PHONE NUMBER"
            required
          />
        </div>
<Appointment />
      </form>
      

      <div className="finisher">
        <div className="container">
          <h3 className="h3finish" id="contact">
            BISOU ROSE
          </h3>

          <p className="pbottom">GIVE US A CALL (+254)743565565</p>
          <hr className="bottom" />
          <p className="pbottom">📍 1st floor, Nova, Muthangari Drive </p>
        </div>
        <hr className="bottom" />
        <p className="bottom2">
          Copyright ©2022 <br /> Masterpiece to beauty <br /> Nicole Kabii
        </p>
        <hr className="bottom" />
        <p className="socialmedia">
          <a href="https://www.instagram.com/officialbisourose/?igshid=YmMyMTA2M2Y%3D">
            <img
              className="socials"
              src={gram}
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.tiktok.com/@officialbisourose?_t=8Wxio4wNWRK&_r=1">
            <img
              className="socials"
              src={twitter}
              alt="tiktok"
              width={20}
              height={20}
            />
          </a>
          <a href="mailto:kabiinicole@gmail.com">
            <img
              className="socials"
              src={gmail}
              alt="email"
              width={20}
              height={20}
            />
          </a>
        </p>
      </div>
    </div>
  );
}
