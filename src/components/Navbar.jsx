import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react'

function Navbar(refresh1) {

    const [bolean, setbolean] = useState(
        JSON.parse(localStorage.getItem('bolean')) || "dark"
    )
    function refresh() {
        setbolean(
            JSON.parse(localStorage.getItem('bolean')) || "dark"
        )
    }
    function fun() {
        setbolean(localStorage.setItem("bolean", JSON.stringify("dark")))
        refresh()
        refresh1()
    }
    function fun1() {
        setbolean(localStorage.setItem("bolean", JSON.stringify("light")))
        refresh()
        refresh1()
    }
    return (
        <div  className='big_navbar'>
            {
                bolean == "dark" ?
                    <div style={{ background: bolean === "dark" ? "" : "#181920", color: bolean === "dark" ? "" : "#fff" }} className='navbar'>
                        <div className="logo"><p><Link to="/">C</Link></p></div>

                        <div className="text_box">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/abaut">Abaut</NavLink>
                            <NavLink to="/product">Product</NavLink>
                            <NavLink to="/card">Card  </NavLink>
                        </div>
                        <div className="nav">
                            <div className="mode">
                                <BsFillMoonFill className='icon' style={{ cursor: "pointer", transform: bolean === "dark" ? "rotate(10deg)" : "rotate(70deg)", transition: "all 0.5s linear", opacity: bolean === "dark" ? "100" : "0", zIndex: bolean === "dark" ? "100" : "0" }} onClick={fun1} />
                                <BsFillSunFill className='icon' style={{ color: "#fff", cursor: "pointer", transform: bolean === "dark" ? "rotate(10deg)" : "rotate(-70deg)", transition: "all 0.5s linear", opacity: bolean === "dark" ? "0" : "100", zIndex: bolean === "dark" ? "0" : "100" }} onClick={fun} />

                            </div>
                            <div className="shop">
                                <AiOutlineShoppingCart style={{ width: "20px", height: "20px" }} />
                                <p className='p1' style={{ background: '#057AAF' }}>0</p>
                            </div>
                        </div>
                    </div> : <div style={{ background: bolean === "dark" ? "" : "#181920", color: bolean === "dark" ? "" : "#fff" }} className='navbar'>
                        <div style={{ background: "#FF7AC6", color: "#000" }} className="logo"><p>C</p></div>

                        <div className="text_box">
                            <NavLink className="a1" to="/">Home</NavLink>
                            <NavLink className="a1" to="/abaut">Abaut</NavLink>
                            <NavLink className="a1" to="/product">Product</NavLink>
                            <NavLink className="a1" to="/card">Card  </NavLink>
                        </div>
                        <div className="nav">
                            <div className="mode">
                                <BsFillMoonFill className='icon' style={{ cursor: "pointer", transform: bolean == "dark" ? "rotate(10deg)" : "rotate(70deg)", transition: "all 0.5s linear", opacity: bolean == "dark" ? "100" : "0", zIndex: bolean == "dark" ? "100" : "0" }} onClick={fun1} />
                                <BsFillSunFill className='icon' style={{ color: "#fff", cursor: "pointer", transform: bolean == "dark" ? "rotate(10deg)" : "rotate(-70deg)", transition: "all 0.5s linear", opacity: bolean == "dark" ? "0" : "100", zIndex: bolean == "dark" ? "0" : "100" }} onClick={fun} />

                            </div>
                            <div className="shop">
                                <AiOutlineShoppingCart style={{ width: "20px", height: "20px" }} />
                                <p className='p1' style={{ background: "#FF7AC6" }}>0</p>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default Navbar