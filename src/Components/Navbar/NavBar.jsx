import React, { useState } from "react";
import "./NavBar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const NavBar = () => {
  const [active,setActive]=useState('navBar');

  const showNav=()=>{
    setActive('navBar activeNavBar');
  }
  const closeNavBar=()=>{
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv flex">
          <a href="#" className="logo">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Travel.
            </h1>
          </a>
        </div>
        <div className="navBar">
          <ul className="navlists flex">
            <li className="navItem ">
              <a href="#" className="navlink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navlink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          <div onClick={closeNavBar} className="closeNavbar" />
          <AiFillCloseCircle className="icon" />
        </div>

        <div onClick={()=>{setActive('navBar activeNavBar')}} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};
export default NavBar;
