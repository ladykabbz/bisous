import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nails from "./images/nails.jpg";
import salon1 from "./images/salon1.jpg";
import salon2 from "./images/salon2.jpg";
import salon3 from "./images/salon3.jpg";
import salon4 from "./images/salon4.jpg";
import salon5 from "./images/salon5.jpg";
import salon6 from "./images/salon6.jpg";
import salon7 from "./images/salon7.jpg";
import salon8 from "./images/salon8.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="logo" href="#home">
              BISOUS BEAUTY BAR
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Contact us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <div className="intro">
        <h2 className="one">MASTERPIECE TO BEAUTY</h2>
        <button className="button">
          {" "}
          <a className="link" href="https://example.com">
            BOOK AN APPOINTMENT
          </a>{" "}
        </button>
      </div>

      <div className="container">
        <div className="about">
          <div className="row">
            <div className="col-lg-6">
              <h1>OUR SERVICES</h1>
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
                width={425}
                height={425}
                className="nailsimg"
              />
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
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>PEDICURE</h3>
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
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
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
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>PEDICURE</h3>
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
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>EXPRESS MANICURE</h5>
              </div>
              <div className="col-6">
                <h5>KSH 1000</h5>
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

      <div className="gallery">
        <h2 className="galleryheading"> BISOU GALLERY</h2>
        <p>
          We are excited to welcome you to our beauty salon, bringing a touch of
          London to Nairobi! 🥂
        </p>
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon2}
                alt="nails"
                width={200}
                height={500}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon3}
                alt="nails"
                width={200}
                height={500}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon4}
                alt="nails"
                width={200}
                height={500}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon5}
                alt="nails"
                width={200}
                height={500}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon6}
                alt="nails"
                width={200}
                height={500}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon7}
                alt="nails"
                width={200}
                height={500}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salon8}
                alt="nails"
                width={200}
                height={500}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <h1 className="contactheading">Contact Us</h1>
      <p className="contactp">We are here to help you</p>

      <form>
        <div className="form-field">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-field">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-field">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-field">
          <input type="submit" value="SEND" />
        </div>
      </form>

      <div className="finisher">
        <div className="container">
          <h3 className="h3finish">BISOU ROSE</h3>

          <p className="pbottom">GIVE US A CALL (+254)743565565</p>
          <hr className="bottom" />
          <p className="pbottom">📍 1st floor, Nova, Muthangari Drive </p>
        </div>
        <hr className="bottom" />
        <p className="bottom2">
          Copyright ©2022 <br /> Masterpiece to beauty <br /> Nicole Kabii
        </p>
      </div>
    </div>
  );
}
