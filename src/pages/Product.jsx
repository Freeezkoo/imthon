import React, { useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box, Checkbox } from "@mui/material";
import axios from "axios";
function Product() {
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

  const [value, setvalue] = useState(10000);
  function valuetext(value) {
    setvalue(value);
  }

  const [search, setsearch] = useState("");
  const [search1, setsearch1] = useState("");

  const [product, setproduct] = useState([]);
  const [btn, setbtn] = useState([1, 2, 3]);
  useEffect(() => {
    getDate();
  }, []);
  async function getDate() {
    try {
      const res = await axios.get(
        `https://strapi-store-server.onrender.com/api/products?search=&category=all&company=all&order=a-z&price=48000&page=${currentPage}`
      );
      const data = await res.data;
      setproduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [currentPage, setCurrentPage] = useState(1);

  function funn() {
    if (currentPage < 3) {
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
  function searchfun(e) {
    e.preventDefault();
    setsearch1();
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
                Ab
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
      <div>
        <div
          className="container"
          style={{ background: bolean === "dark" ? "#fff" : "#1c212d" }}
        >
          <br />
          <div
            style={{ background: bolean == "dark" ? "" : "#181920" }}
            className="filter_box"
          >
            <form
              style={{ color: bolean == "dark" ? "" : "#FFF" }}
              onSubmit={searchfun}
            >
              <label
                style={{ color: bolean == "dark" ? "" : "#FFF" }}
                className="label"
              >
                Search Product
                <br />
                <input
                  style={{ color: bolean == "dark" ? "" : "#000" }}
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                  type="search"
                  name=""
                  id=""
                  className="inp"
                />
              </label>
              <label
                style={{ color: bolean == "dark" ? "" : "#FFF" }}
                className="label"
              >
                Select Category
                <br />
                <select
                  style={{ color: bolean == "dark" ? "" : "#000" }}
                  name=""
                  id=""
                  className="inp"
                >
                  <option value="">All</option>
                  <option value="Kids">Kids</option>
                  <option value="Chairs">Chairs</option>
                  <option value="Tables">Tables</option>
                  <option value="Beds">Beds</option>
                  <option value="Sofas">Sofas</option>
                </select>
              </label>
              <label
                style={{ color: bolean == "dark" ? "" : "#FFF" }}
                className="label"
              >
                Select Company
                <br />
                <select
                  style={{ color: bolean == "dark" ? "" : "#000" }}
                  name=""
                  id=""
                  className="inp"
                >
                  <option value="">All</option>
                  <option value="Modenza">Modenza</option>
                  <option value="Luxora">Luxora</option>
                  <option value="Homestead">Homestead</option>
                  <option value="Comfora">Comfora</option>
                </select>
              </label>
              <label style={{ color: bolean == "dark" ? "" : "#FFF" }}>
                <p>${value}.00</p>

                <Box sx={{ width: 200 }}>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={10000}
                    getAriaValueText={valuetext}
                    color={bolean == "dark" ? "primary" : "secondary"}
                    step={10}
                    min={0}
                    max={1000}
                  />
                </Box>
                <div className="text_box1">
                  <p className="p11">0</p>
                  <p className="p11">Max : $1000.00</p>
                </div>
              </label>
              <label>
                Free shipping
                <br />
                <Checkbox
                  // inputProps={{ 'aria-label': 'controlled' }}
                  className="checbox"
                  color={bolean == "dark" ? "primary" : "secondary"}
                  style={{ borderRadius: "20px" }}
                />
              </label>
              <label>
                <button
                  style={{
                    background: bolean == "dark" ? "" : "#FF7AC6",
                    color: bolean == "dark" ? "" : "#000",
                  }}
                  className="btn_search"
                >
                  Search
                </button>
              </label>
              <label>
                <button
                  style={{
                    background: bolean == "dark" ? "" : "#FFB86B",
                    color: bolean == "dark" ? "" : "#000",
                  }}
                  className="btn_reset"
                >
                  Reset
                </button>
              </label>
            </form>
          </div>
          <br />

          <br />
          <div className="card_box_home">
            {product.map((val) => (
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
          {bolean == "dark" ? (
            <div className="big_pagination">
              <div
                style={{
                  background: bolean == "dark" ? "" : "#0000",
                  color: bolean == "dark" ? "" : "#fff",
                }}
                className="pagination"
              >
                <button onClick={fun11} className="prev">
                  PREV
                </button>
                <div className="btn_box">
                  {btn.map((val) => (
                    <button
                      onClick={() => setCurrentPage(val)}
                      style={{
                        background:
                          currentPage === val
                            ? "rgba(128, 128, 128, 0.279)"
                            : "",
                      }}
                      key={val}
                      className="btn_pagination"
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <button onClick={funn} className="next">
                  NEXT
                </button>
              </div>
            </div>
          ) : (
            <div className="big_pagination">
              <div
                style={{
                  background: bolean == "dark" ? "" : "#0000",
                  color: bolean == "dark" ? "" : "#fff",
                }}
                className="pagination"
              >
                <button onClick={fun11} className="prev">
                  PREV
                </button>
                <div className="btn_box">
                  {btn.map((val) => (
                    <button
                      onClick={() => setCurrentPage(val)}
                      style={{
                        background: currentPage === val ? "#00000089" : "",
                      }}
                      key={val}
                      className="btn_pagination"
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <button onClick={funn} className="next">
                  NEXT
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
