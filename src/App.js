import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
import image10 from "./assets/e851ed9848beb20b9911c928328661a8aca7b3e7.jpg"

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
      <div
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
              fontSize: 40,
              fontWeight: 600,
            }}
          >
            Empower Farmers, Agricultural Communities And Environmental<br></br>
            <span style={{ fontWeight: "normal", fontSize: 20 }}>
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
          spaceBetween={1}
          slidesPerView={4}
          breakpoints={{
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }} style={{transform:"TranslateY(-100px)"}}
        >
          <SwiperSlide>
            <div style={{ position: 'relative'}}>
              <img src={image10} alt="" ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: 'relative'}}>
              <img src={image10} alt="" ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: 'relative'}}>
              <img src={image10} alt="" ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
