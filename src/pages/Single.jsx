import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Single() {
  const { state } = useLocation();
  const [data, setdata] = useState({ state });
  const [bolean, setbolean] = useState(
    JSON.parse(localStorage.getItem("bolean")) || "dark"
  );
  const [colorbolean, setcolorbolean] = useState("");
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
  const [currentPage, setCurrentPage] = useState(1);

  function funn() {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
    getDate();
  }
  function fun11() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    getDate();
  }
  const naviagate = useNavigate();
  function sendfun() {
    toast.success("Item added to cart", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      naviagate("/card", { state: { data } });
    }, 7000);
  }
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
        style={{ background: bolean === "dark" ? "" : "#1c212d" }}
        className="big_single"
      >
        <div className="single">
          <p style={{ color: bolean === "dark" ? "" : "#fff" }} className="df">
            <Link to="/">Home </Link>
            <GrFormNext
              style={{ background: bolean == "dark" ? "" : "#fff" }}
            />
            <Link to="/product">Prducts</Link>
          </p>
          <br />
          <div className="single_box">
            <ToastContainer />
            <img
              className="single_img"
              src={state.val.attributes.image}
              alt=""
            />
            <div className="single_card">
              <h1
                style={{ color: bolean === "dark" ? "" : "#fff" }}
                className="h1_title"
              >
                {state.val.attributes.title}
              </h1>
              <h1
                style={{ color: bolean === "dark" ? "" : "#fff" }}
                className="h1_company"
              >
                {state.val.attributes.company}
              </h1>
              <h1
                style={{ color: bolean === "dark" ? "" : "#fff" }}
                className="h1_price"
              >
                {" "}
                ${state.val.attributes.price}
              </h1>
              <span
                style={{ color: bolean === "dark" ? "" : "#fff" }}
                className="P_description"
              >
                {" "}
                ${state.val.attributes.description}
              </span>
              <p
                style={{ color: bolean === "dark" ? "" : "#fff" }}
                className="P_description"
              >
                Colors
              </p>
              <div className="color_box">
                {state.val.attributes.colors.map((val, i) => (
                  <button
                    onClick={() => setcolorbolean(val)}
                    key={i}
                    style={{
                      background: val,
                      color: val,
                      border: colorbolean == val ? "2px solid black" : "",
                    }}
                    className="color"
                  >
                    1
                  </button>
                ))}
              </div>
              <div className="big_amaunt">
                <div className="amaunt">
                  <button onClick={fun11} className="prev">
                    -
                  </button>
                  <div className="btn_amaunt_box">
                    <button className="btn_amaunt">{currentPage}</button>
                  </div>
                  <button onClick={funn} className="next">
                    +
                  </button>
                </div>
              </div>
              <br />
              <div className="df">
                <button onClick={sendfun} className="bag">
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
