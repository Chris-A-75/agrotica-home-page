import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import logo from "./assets/AGROTICA-2024-2.png";
import image1 from "./assets/Rectangle 1.png";
import image2 from "./assets/Mask group.png";
import image3 from "./assets/Mask group2.png";
import image4 from "./assets/Screenshot 2025-08-18 135204.png";
import image5 from "./assets/Screenshot 2025-08-19 102450.png";
import image6 from "./assets/Group 98.png";
import image7 from "./assets/Group 99.png";
import image8 from "./assets/Fill-33.png";
import image9 from "./assets/Group 100.png";
import image10 from "./assets/e851ed9848beb20b9911c928328661a8aca7b3e7.jpg";
import image11 from "./assets/26dfd2b7cb7ee10e31395370a8715133eecfcba1.jpg";
import image12 from "./assets/38f4d51eab33acd1e666cc72df6740c6167fa801.jpg";
import image13 from "./assets/2d9def85b20c5fabd1f12e07da060dd60fad6444.jpg";
import image14 from "./assets/Group 76.png";
import image15 from "./assets/text.png";
import image16 from "./assets/Group 14.png";
import image17 from "./assets/Mask group1.png";
import image18 from "./assets/Rectangle 12.png";

function App() {
  return (
    <div>
      {/* root */}
      <div className="top-bar-1">
        <img src={logo} alt="logo" height="100%"></img>
        <div
          title="top-bar-1-text"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "grey",
              borderRight: "1px solid #E4E2D7",
              padding: 20,
              paddingRight: 80,
            }}
          >
            Call anytime <br></br>
            <span style={{ fontWeight: "bold", color: "black", fontSize: 14 }}>
              +961 3 21 22 30
            </span>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "grey",
              borderRight: "1px solid #E4E2D7",
              padding: 20,
              paddingRight: 80,
            }}
          >
            Send email <br></br>
            <span style={{ fontWeight: "bold", color: "black", fontSize: 14 }}>
              Info@Agrotica.info
            </span>
          </div>

          <div style={{ fontSize: 12, color: "grey", padding: 20 }}>
            Al Chouf - Mahafer - Main Street <br></br>
            <span style={{ fontWeight: "bold", color: "black", fontSize: 14 }}>
              Al Chouf
            </span>
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
      </div>
      <div className="section-1"
        style={{ position: "relative", display: "inline-block", width: "100%" }}
      >
        <img
          src={image1}
          alt=""
          style={{ width: "100%", transform: "translateY(-18px)" }}
        ></img>
        <div
          className="centered-image-text"
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              paddingLeft: "25%",
              paddingRight: "25%",
              fontSize: "2.78vw",
              fontWeight: 600,
            }}
          >
            Empower Farmers, Agricultural Communities And Environmental<br></br>
            <span style={{ fontWeight: "normal", fontSize: "1.39vw" }}>
              Empower Farmers, Agricultural Communities And Environmental
            </span>
          </div>
          <br></br>
          <button className="green-button-style">DISCOVER MORE 🠊</button>
        </div>
      </div>
      <div className="section-2">
        <div>
          <img src={image2} alt=""></img>
        </div>
        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 40,
            textTransform: "capitalize",
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          Agrotica is Dedicated to Advancing Sustainable Agriculture<br></br>
          <span style={{ fontSize: 25, fontWeight: "normal", lineHeight: 1 }}>
            Founded in 2009 by a team of agricultural experts with over two
            decades of experience,
          </span>
          <br></br>
          <img src={image4} alt="" style={{ width: 150, height: 70 }}></img>
          <div
            style={{
              textTransform: "capitalize",
              fontSize: 22.5,
              color: "#4BAF47",
              fontWeight: 400,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 37.5 }}>15 +</span> years
            experience
          </div>
          <button className="green-button-style">DISCOVER MORE 🠊</button>
        </div>
        <div>
          <img src={image3} alt=""></img>
        </div>
      </div>
      <img
        src={image5}
        alt=""
        style={{ display: "block", width: "100%" }}
      ></img>
      <div className="section-3">
        <div
          title="left-section"
          style={{
            marginLeft: 0,
            backgroundColor: "white",
            width: 454,
            height: 441,
            boxShadow: "0px 11.25px 45px -7.5px rgba(109, 117, 143, 0.33)",
            paddingBottom: 5,
          }}
        >
          <img src={image8} alt="" style={{ marginTop: 31 }}></img>
          <div
            style={{
              fontFamily: "'Shadows Into Light Two', cursive", // cursive as fallback
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "21.6px",
              letterSpacing: "0.75px",
              verticalAlign: "middle",
              textTransform: "capitalize",
              marginLeft: 40.25,
              color: "#49A760",
            }}
          >
            agrotica solutions
          </div>
          <br></br>
          <div
            style={{
              fontWeight: 500,
              fontSize: 40,
              color: "#04000B",
              marginLeft: 40,
              verticalAlign: "middle",
              marginBottom: 10,
            }}
          >
            Agriculture through innovative solutions.
          </div>
          <div
            style={{
              color: "#666666",
              fontSize: 16,
              fontWeight: 500,
              marginLeft: 40,
              paddingRight: 100,
            }}
          >
            Our expertise also extends to offering advanced irrigation services
            and effective crop protection solutions,
          </div>
          <br></br>
          <a
            href=""
            style={{
              color: "#4BAF47",
              fontFamily: "Outfit",
              fontWeight: 600,
              marginLeft: 40,
            }}
          >
            VIEW ALL DETAILS
          </a>
          <br></br>
          <img src={image9} alt="" style={{ marginLeft: 220 }}></img>
        </div>
        <div title="right-section" style={{ display: "flex" }}>
          <div style={{}}>
            <img src={image6} alt="" style={{ marginRight: 50 }}></img>
            <img src={image7} alt=""></img>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div style={{ maxWidth: "40%" }}>
          <span style={{ fontWeight: 600, fontSize: 40 }}>Our Projects</span>{" "}
          <br></br>
          <br></br>
          <span style={{ fontSize: 20, textTransform: "capitalize" }}>
            Sollicitudin ac orci phasellus egest tellusun rutrum tellus. Amet
            commod nulla facilisi nulla. Sed etetur adipscin
          </span>
        </div>
        <button
          className="green-button-style"
          style={{ marginTop: 132, width: 242 }}
        >
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
            <div style={{ position: "relative" }}>
              <img
                src={image10}
                alt=""
                style={{ wdith: 506, height: 358 }}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: "relative" }}>
              <img
                src={image11}
                alt=""
                style={{ width: 506, height: 358 }}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: "relative" }}>
              <img
                src={image12}
                alt=""
                style={{ width: 506, height: 358 }}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: "relative" }}>
              <img
                src={image13}
                alt=""
                style={{ width: 506, height: 358 }}
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className="js-swiper-responsive-breakpoint-pagination"
          style={{ display: "flex", justifyContent: "center" }}
        />
        <img
          src={image14}
          alt=""
          style={{ marginTop: 40, width: "100%" }}
        ></img>
      </div>
      <div className="section-5">
        <img src={image15} alt="" style={{ width: "100%" }}></img>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: 70,
            paddingLeft: "31%",
            paddingRight: "17%",
            marginBottom: 95,
          }}
        >
          <div>
            We Believe In Bringing Customers The{" "}
            <span style={{ color: "#4BAF47" }}>
              <br></br>Best Products
            </span>
            <img
              src={image16}
              alt=""
              style={{ marginLeft: 20, cursor: "pointer" }}
            ></img>
          </div>
        </div>
      </div>
      <div className="section-5-5">
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src={image17}
            alt=""
            style={{
              width: "100%",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0%",
              left: "7%",
              width: "35%",
              height: "auto",
            }}
          >
            <img
              src={image18}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                color: "black",
                fontSize: 50,
                fontWeight: 500,
              }}
            >
              Get in Touch with Our Team 
              <br></br><span style={{fontSize:30, fontWeight:400,lineHeight:0.5}}>For Expert Agricultural Support and Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
