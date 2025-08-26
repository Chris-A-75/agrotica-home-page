import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import logo from "./assets/AGROTICA-2024-2.png";
import image1 from "./assets/Rectangle 1.png";
import image2 from "./assets/Mask group.png";
import image3 from "./assets/Mask group2.png";
import image4 from "./assets/Screenshot 2025-08-18 135204.png";
import image5 from "./assets/Screenshot 2025-08-19 102450.png";
import image6 from "./assets/Group 98-1.png";
import image6_1 from "./assets/Group 98-2.png";
import image7 from "./assets/Group 99-1.png";
import image7_1 from "./assets/Group 99-2.png";
import image8 from "./assets/Fill-33.png";
import image9 from "./assets/Group 100.png";
import image10 from "./assets/e851ed9848beb20b9911c928328661a8aca7b3e7.jpg";
import image11 from "./assets/26dfd2b7cb7ee10e31395370a8715133eecfcba1.jpg";
import image12 from "./assets/38f4d51eab33acd1e666cc72df6740c6167fa801.jpg";
import image13 from "./assets/2d9def85b20c5fabd1f12e07da060dd60fad6444.jpg";
import image14 from "./assets/Group 76.png";
import image15 from "./assets/text.png";
import image16 from "./assets/Group 14.png";
import image19 from "./assets/AGROTICA-2024-3.png";
import icon1 from "./assets/Icon.png";
import icon2 from "./assets/Icon (1).png";
import icon3 from "./assets/burger-bar.png";

function App() {
  const [panelOpen, setPanelOpen] = React.useState(false);

  return (
    <div>
      {/* root */}
      <div className="top-bar-1">
        <img src={logo} alt="logo" height="100%" />
        <div className="top-bar-1-text" title="top-bar-1-text">
          <div className="contact-block">
            Call anytime <br />
            <span className="bold-text">+961 3 21 22 30</span>
          </div>
          <div className="contact-block">
            Send email <br />
            <span className="bold-text">Info@Agrotica.info</span>
          </div>
          <div className="location-block">
            Al Chouf - Mahafer - Main Street <br />
            <span className="bold-text">Al Chouf</span>
          </div>
          {/* add fb and insta pics later */}
        </div>
      </div>

      <div className="top-bar-2">
        <a className="bar-link-text" href="/home">
          Home
        </a>
        <a className="bar-link-text" href="/about">
          About us
        </a>
        <a className="bar-link-text" href="/products">
          Products
        </a>
        <a className="bar-link-text" href="/projects">
          Projects
        </a>
        <a className="bar-link-text" href="/contact">
          Contact us
        </a>
        <div>
          <img
            src={icon3}
            alt=""
            className="hamburger-menu-top-bar-2"
            onClick={() => setPanelOpen(!panelOpen)}
          />
        </div>
      </div>
      <div className={`side-panel ${panelOpen ? 'open' : ''}`}>
        <button className="x-button-side-panel" onClick={() => setPanelOpen(false)}>✕</button>
        <a className="side-panel-links" href="/home">
          Home
        </a>
        <a className="side-panel-links" href="/about">
          About us
        </a>
        <a className="side-panel-links" href="/products">
          Products
        </a>
        <a className="side-panel-links" href="/projects">
          Projects
        </a>
        <a className="side-panel-links" href="/contact">
          Contact us
        </a>
      </div>

      <div className="section-1">
        <img src={image1} alt="" className="section-1-img" />
        <div className="centered-image-text">
          <div className="centered-text">
            Empower Farmers, Agricultural Communities And Environmental
            <br />
            <span className="centered-subtext">
              Empower Farmers, Agricultural Communities And Environmental
            </span>
          </div>
          <br />
          <button className="green-button-style">DISCOVER MORE 🠊</button>
        </div>
      </div>

      <div className="section-2">
        <div>
          <img src={image2} alt="" className="section-2-image" />
        </div>

        <div className="section-2-text">
          Agrotica is Dedicated to Advancing Sustainable Agriculture
          <br />
          <span className="section-2-subtext">
            Founded in 2009 by a team of agricultural experts with over two
            decades of experience,
          </span>
          <br />
          <img src={image4} alt="" className="section-2-logo" />
          <div className="section-2-experience">
            <span className="experience-highlight">15 +</span> years experience
          </div>
          <button className="green-button-style">DISCOVER MORE 🠊</button>
        </div>

        <div>
          <img src={image3} alt="" className="section-2-image" />
        </div>
      </div>

      <img src={image5} alt="" className="section-2-3-seperator"></img>

      <div className="section-3">
        <div title="left-section" className="section-3-left">
          <img src={image8} alt="" className="section-3-main-image" />

          <div className="section-3-subtitle">agrotica solutions</div>

          <br />

          <div className="section-3-title">
            Agriculture through innovative solutions.
          </div>

          <div className="section-3-description">
            Our expertise also extends to offering advanced irrigation services
            and effective crop protection solutions,
          </div>

          <br />

          <a href="" className="section-3-link">
            VIEW ALL DETAILS
          </a>

          <br />

          <img src={image9} alt="" className="section-3-bottom-image" />
        </div>

        <div title="right-section" className="section-3-right">
          <img src={image6} alt="" className="section-3-side-image" />
          <img src={image7} alt="" className="section-3-side-image" />
          <img src={image6_1} alt="" className="section-3-side-image" />
          <img src={image7_1} alt="" className="section-3-side-image" />
        </div>
      </div>

      <div className="section-4">
        <div className="section-4-text-block">
          <span className="section-4-heading">Our Projects</span>
          <br />
          <br />
          <span className="section-4-subtext">
            Sollicitudin ac orci phasellus egest tellusun rutrum tellus. Amet
            commod nulla facilisi nulla. Sed etetur adipscin
          </span>
        </div>

        <button className="green-button-style section-4-button">
          view all projects 🠊
        </button>
      </div>

      <div className="section-4-5">
        <Swiper
          className="swiper"
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            el: ".js-swiper-responsive-breakpoint-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="swiper-slide-wrapper">
              <img src={image10} alt="" className="slide-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrapper">
              <img src={image11} alt="" className="slide-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrapper">
              <img src={image12} alt="" className="slide-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrapper">
              <img src={image13} alt="" className="slide-image" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="js-swiper-responsive-breakpoint-pagination swiper-pagination-custom" />

        <img src={image14} alt="" className="section-4-5-footer-image" />
      </div>

      <div className="section-5">
        <img src={image15} alt="" className="section-5-banner" />

        <div className="section-5-heading">
          <div>
            We Believe In Bringing Customers The{" "}
            <span className="section-5-highlight">
              <br />
              Best Products
            </span>
            <img src={image16} alt="" className="section-5-icon" />
          </div>
        </div>
      </div>

      <div className="section-5-5">
        <div className="section-5-5-background-container">
          <div className="section-5-5-corner-shape">
            <div className="section-5-5-text-block">
              Get In Touch With Our Team
              <br />
              <span className="section-5-5-subtext">
                For Expert Agricultural Support and Solutions
              </span>
              <br />
              <button className="green-button-style Bsection-5-5">
                contact us 🠊
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="section-6">
        <div className="section-6-top-section">
          <img src={image19} alt="" />
          <div className="bar-links-section-6">
            <a className="bar-link-text-2" href="/home">
              home
            </a>
            <a className="bar-link-text-2" href="/about">
              About us
            </a>
            <a className="bar-link-text-2" href="/products">
              Products
            </a>
            <a className="bar-link-text-2" href="/projects">
              Projects
            </a>
            <a className="bar-link-text-2" href="/contact">
              Contact us
            </a>
          </div>
        </div>

        <div className="section-6-separator" title="seperator"></div>

        <div className="section-6-bottom" title="bottom-part">
          <div className="section-6-copyright">
            Copyright 2024 AGROTICA | All Rights Reserved
          </div>
          <div className="section-6-follow">
            Follow Us:
            <img src={icon1} alt="" className="section-6-icon" />
            <img src={icon2} alt="" className="section-6-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
