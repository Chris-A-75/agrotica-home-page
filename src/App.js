import "./App.css";
import logo from "./assets/AGROTICA-2024-2.png";
import image1 from "./assets/Rectangle 1.png";

function App() {
  return (
    <div>
      {/* root */}
      <div className="top-bar-1">
        <img src={logo} alt="logo" height="100%"></img>
        <div
          title="top-bar-1-text"
          style={{
            marginLeft: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 13, color: "grey" }}>
            Call anytime <br></br>
            <span style={{ fontWeight: "bold", color: "black" }}>
              +961 3 21 22 30
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "80px",
              backgroundColor: "#ccc",
              margin: 60,
            }}
          ></div>
          <div style={{ fontSize: 13, color: "grey" }}>
            Send email <br></br>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Info@Agrotica.info
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "80px",
              backgroundColor: "#ccc",
              margin: 60,
            }}
          ></div>
          <div style={{ fontSize: 13, color: "grey" }}>
            Al Chouf - Mahafer - Main Street <br></br>
            <span style={{ fontWeight: "bold", color: "black" }}>Al Chouf</span>
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
          style={{ width: "100%", transform: "translateY(-22px)" }}
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
          <h1>Empower Farmers, Agricultural Communities And Environmental</h1>
          <span style={{ fontWeight: "normal" }}>
            Empower Farmers, Agricultural Communities And Environmental
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
