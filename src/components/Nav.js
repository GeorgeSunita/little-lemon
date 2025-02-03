import Logo from "../assets/Logo.svg";
import { Link } from "react-router";

import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from "react";

export default function Nav(ref) {
  let iconStyles = { color: "black", fontSize: "2em" };
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="nav-section ">
        <figure>
          <img className="logo" src={Logo} alt="Little Lemon Logo"></img>
        </figure>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="reservations">Reservations</Link>
          </li>
          <li>
            <Link to="order">Order</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>

        <div className="hamburger">
          {hamburgerOpen === false ? (
            <GiHamburgerMenu style={iconStyles} onClick={toggleHamburger} />
          ) : (
            <IoCloseCircleOutline
              style={iconStyles}
              onClick={toggleHamburger}
            />
          )}
        </div>
      </div>
      <style jsx>
        {`
          .nav-section {
            grid-area: nav;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Markazi Text;
            font-weight: 600;
          }
          .nav-links {
            min-width: 100%;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          li a {
            text-decoration: none;
          }
          .hamburger {
            display: none;
          }

          @media (max-width: 768px) {
            .nav-section {
              grid-area: nav;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .nav-links {
              display: ${hamburgerOpen ? "flex" : "none"};
              flex-flow: column;
              background-color: #f4ce14;
              opacity: 1;
              position: fixed;
              top: 0px;
              right: 0px;
              height: 70vh;
              width: 100%;
              height: 60%;
              align-items: center;
              justify-content: space-evenly;
            }

            .hamburger {
              display: flex;
              z-index: 10;
            }
            .logo {
              width: 10rem;
              height: 6rem;
            }
          }
        `}
      </style>
    </>
  );
}
