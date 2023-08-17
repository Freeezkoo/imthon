import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

function Abaut() {
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
  return (
    <div
      style={{ background: bolean === "dark" ? "#fff" : "#1c212d" }}
      className="container"
    >
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
      <br />
      <div className="abaut">
        <div className="abaut_box">
          <h1 style={{ color: bolean == "dark" ? "" : "#fff" }}>We love</h1>
          <h1
            style={{
              background: bolean == "dark" ? "" : "#FF7AC6",
              color: bolean == "dark" ? "" : "#000",
            }}
            className="h1_abaut"
          >
            comfy
          </h1>
          <br />
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: bolean == "dark" ? "" : "#fff",
            lineHeight: "45px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
          odit, officiis <br />
          eos mollitia alias, doloremque, aspernatur ratione asperiores voluptas
          labore minus <br /> dolores reprehenderit corporis quos. Assumenda
          molestias harum dignissimos?
        </p>
      </div>
    </div>
  );
}

export default Abaut;
