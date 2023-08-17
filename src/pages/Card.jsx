import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useState } from "react";

function Card() {
  const [colorbolean, setcolorbolean] = useState("");

  const { state } = useLocation();
  useEffect(() => {
    push();
  }, []);
  useEffect(() => {
    refresh1();
  }, []);
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
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  function push() {
    setdata(localStorage.setItem("data", JSON.stringify([state])));
  }

  function refresh1() {
    setdata(JSON.parse(localStorage.getItem("data")) || []);
  }
  console.log(data);
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
  return (
    <div>
      <div
        style={{ background: bolean === "dark" ? "#fff" : "#1c212d" }}
        className="big_navbar"
      >
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
              <NavLink to="/abaut">Abaout</NavLink>
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
                Abaut
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
        <div className="card_page">
          {data[0] == null ? (
            <div className="full">
              <h1 className="h2">Your Cart Is Empty</h1>
              <br /> <hr />
            </div>
          ) : (
            <div className="card_page">
              <h1 className="h2">Shopping Cart</h1>
              <br /> <hr />
              <br />
              {data.map((val, i) => (
                <div key={i} className="card_basket">
                  <img
                    className="img_basket"
                    src={val.data.state.val.attributes.image}
                    alt=""
                  />
                  <div className="basket1">
                    <h2 className="h2">
                      {val.data.state.val.attributes.title}
                    </h2>
                    <p className="p">{val.data.state.val.attributes.company}</p>
                    <div className="color_box">
                      Color :
                      {val.data.state.val.attributes.colors.map((val, i) => (
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
                  </div>
                  <div className="basket1">
                    <div className="price_basket">
                      <p> Amount</p>
                      <br />
                      <div className="big_amaunt">
                        <div className="amaunt">
                          <button onClick={fun11} className="prev">
                            -
                          </button>
                          <div className="btn_amaunt_box">
                            <button className="btn_amaunt">
                              {currentPage}
                            </button>
                          </div>
                          <button onClick={funn} className="next">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <IoMdRemoveCircleOutline
                      className="remove"
                      style={{ color: "red" }}
                    />
                  </div>
                  <h2 className="h2">${val.data.state.val.attributes.price}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
