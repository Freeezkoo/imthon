import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Slider from "../components/Slider";
import axios from "axios";

function Home() {
  const [bolean, setbolean] = useState(
    JSON.parse(localStorage.getItem("bolean")) || "dark"
  );
  function refresh() {
    setbolean(JSON.parse(localStorage.getItem("bolean")) || "dark");
  }
  function fun() {
    setbolean(localStorage.setItem("bolean", JSON.stringify("dark")));
    refresh();
  }
  function fun1() {
    setbolean(localStorage.setItem("bolean", JSON.stringify("light")));
    refresh();
  }
  const [home, sehome] = useState([]);
  useEffect(() => {
    getDate();
  }, []);
  async function getDate() {
    try {
      const res = await axios.get(
        `https://strapi-store-server.onrender.com/api/products?featured=true`
      );
      const data = await res.data;
      sehome(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const naviagate = useNavigate();
  return (
    <>
      <div className="big_navbar">
        {bolean == "dark" ? (
          <div
            style={{
              background: bolean === "dark" ? "" : "#181920",
              color: bolean === "dark" ? "" : "#fff",
            }}
            className="navbar"
          >
            <div className="logo">
              <p>
                <Link to="/">C</Link>
              </p>
            </div>

            <div className="text_box">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/abaut">About</NavLink>
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/card">Card </NavLink>
            </div>
            <div className="nav">
              <div className="mode">
                <BsFillMoonFill
                  className="icon"
                  style={{
                    cursor: "pointer",
                    transform:
                      bolean === "dark" ? "rotate(10deg)" : "rotate(70deg)",
                    transition: "all 0.5s linear",
                    opacity: bolean === "dark" ? "100" : "0",
                    zIndex: bolean === "dark" ? "100" : "0",
                  }}
                  onClick={fun1}
                />
                <BsFillSunFill
                  className="icon"
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    transform:
                      bolean === "dark" ? "rotate(10deg)" : "rotate(-70deg)",
                    transition: "all 0.5s linear",
                    opacity: bolean === "dark" ? "0" : "100",
                    zIndex: bolean === "dark" ? "0" : "100",
                  }}
                  onClick={fun}
                />
              </div>
              <div className="shop">
                <AiOutlineShoppingCart
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="p1" style={{ background: "#057AAF" }}>
                  0
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: bolean === "dark" ? "" : "#181920",
              color: bolean === "dark" ? "" : "#fff",
            }}
            className="navbar"
          >
            <div
              style={{ background: "#FF7AC6", color: "#000" }}
              className="logo"
            >
              <p>C</p>
            </div>

            <div className="text_box">
              <NavLink className="a1" to="/">
                Home
              </NavLink>
              <NavLink className="a1" to="/abaut">
                About
              </NavLink>
              <NavLink className="a1" to="/product">
                Product
              </NavLink>
              <NavLink className="a1" to="/card">
                Card{" "}
              </NavLink>
            </div>
            <div className="nav">
              <div className="mode">
                <BsFillMoonFill
                  className="icon"
                  style={{
                    cursor: "pointer",
                    transform:
                      bolean == "dark" ? "rotate(10deg)" : "rotate(70deg)",
                    transition: "all 0.5s linear",
                    opacity: bolean == "dark" ? "100" : "0",
                    zIndex: bolean == "dark" ? "100" : "0",
                  }}
                  onClick={fun1}
                />
                <BsFillSunFill
                  className="icon"
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    transform:
                      bolean == "dark" ? "rotate(10deg)" : "rotate(-70deg)",
                    transition: "all 0.5s linear",
                    opacity: bolean == "dark" ? "0" : "100",
                    zIndex: bolean == "dark" ? "0" : "100",
                  }}
                  onClick={fun}
                />
              </div>
              <div className="shop">
                <AiOutlineShoppingCart
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="p1" style={{ background: "#FF7AC6" }}>
                  0
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="container"
        style={{ background: bolean === "dark" ? "#fff" : "#1c212d" }}
      >
        <br />
        <div className="big_home">
          <div className="home">
            <div className="home_box">
              <h1
                style={{ color: bolean == "dark" ? "" : "#fff" }}
                className="h1"
              >
                We’re changing <br /> the way people <br /> shop.
              </h1>
              <br />
              <span
                style={{ color: bolean == "dark" ? "" : "#fff" }}
                className="span"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure{" "}
                <br />
                qui lorem cupidatat commodo. Elit sunt amet fugiat veniam <br />{" "}
                occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non{" "}
                <br /> deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
              <br />
              <br />
              <button
                style={{
                  background: bolean == "dark" ? "#057AAF" : "",
                  color: bolean == "dark" ? "#fff" : "",
                }}
                className="btn"
              >
                Our product
              </button>
            </div>
            <div
              style={{ background: bolean === "dark" ? "" : "#414558" }}
              className="slide_box"
            >
              <Slider />
            </div>
          </div>
          <h1
            style={{
              fontSize: "30px",
              color: bolean == "dark" ? "#394E6A" : "#fff",
            }}
          >
            Featured Products
          </h1>
          <br />
          <hr
            style={{ background: bolean == "dark" ? "#000" : "" }}
            className="hr"
          />
        </div>
        <br />
        <div className="card_box_home">
          {home.map((val) => (
            <div
              onClick={() => naviagate("/single", { state: { val } })}
              style={{ background: bolean === "dark" ? "#fff" : "#1c212d" }}
              key={val.id}
              className="card"
            >
              <img src={val.attributes.image} alt="" className="card_img" />
              <br />
              <h2
                style={{ color: bolean === "dark" ? "" : "#FFF" }}
                className="h2"
              >
                {val.attributes.title[0].toUpperCase() +
                  val.attributes.title.slice(1)}
              </h2>
              <span
                style={{ color: bolean === "dark" ? "" : "#BF95F9" }}
                className="price"
              >
                ${val.attributes.price}
              </span>
            </div>
          ))}
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
