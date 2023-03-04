import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [bodyWidth, setbodyWidth] = useState("");
  useEffect(() => {
    const handleResize = () => {
      setbodyWidth(window.innerWidth);
      console.log(bodyWidth);
    };
    window.addEventListener("resize", handleResize);
    const hjdTopMenu = document.getElementById("hjd-top-menu");
    const hjdTopMenuIcon = document.getElementById("hjd-top-menu-icon");
    const handleClick = (e) => {
      if (hjdTopMenuIcon.contains(e.target)) {
        console.log("hello");
        hjdTopMenu.classList.toggle("hidden");
        hjdTopMenu.classList.toggle("hjd-top-menu-expanded");
      } else {
        if (hjdTopMenu.classList.contains("hjd-top-menu-expanded")) {
          hjdTopMenu.classList.remove("hjd-top-menu-expanded");
          hjdTopMenu.classList.add("hidden");
        }
      }
    };

    document.addEventListener("click", handleClick);
    if (bodyWidth > 1023) {
      hjdTopMenu.classList.remove("hjd-top-menu-expanded");
      hjdTopMenu.classList.add("hidden");
    }
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <header className="p-6 mx-auto">
      <nav className="flex justify-between items-center relative">
        <div className="logo text-center basis-2/6 font-semibold text-xl cursor-pointer">
          CoffeeStyle.
        </div>
        <ul
          id="hjd-top-menu"
          className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end uppercase font-medium gap-8 text-gray-500 text-xs tracking-widest"
        >
          <li className="hjd-top-menu-item">
            <a>Home</a>
          </li>
          <li className="hjd-top-menu-item">
            <a>Our Product</a>
          </li>
          <li className="hjd-top-menu-item">
            <a>Blog</a>
          </li>
          <li className="hjd-top-menu-item">
            <a>About</a>
          </li>
          <li className="hjd-top-menu-item">
            <a>Contact</a>
          </li>
          <li className="hjd-top-menu-item">
            <a>StyleGuide</a>
          </li>
        </ul>
        <ul className="basis-3/6 justify-end lg:basis-1/6  flex lg:justify-start lg:items-center cursor-pointer uppercase text-base text-gray-500 font-medium  ml-16">
          <li className="hjd-top-menu-item">
            <a className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hjd-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span className="mx-2">Cart</span>
              <span className="hjd-badge-circle bg-orange-400 text-white">
                99+
              </span>
            </a>
          </li>
        </ul>
        <div className="basis-1/6 flex px-2 sm:px-4 items-center lg:hidden ">
          <svg
            id="hjd-top-menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hjd-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
