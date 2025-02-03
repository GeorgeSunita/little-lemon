import React from "react";
import Logo from "../assets/Logo.svg";
import homeicon from "../assets/homeicon.svg";
import { Link } from "react-router";
import restaurant from "../assets/restaurant.jpg";

export default function ConfirmBooking() {
  let userInfo = "";

  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);

  return (
    <>
      <div className="form-header stack h">
        <figure>
          <img className="logo" src={Logo} alt="Little Lemon Logo"></img>
        </figure>

        <div>
          <h2 className="booking-header">Little Lemon</h2>
          <h2 className="booking-subheader">Chicago</h2>
        </div>
        <figure>
          <Link to="/">
            <img className="logo-home" src={homeicon} alt="Home icon"></img>
          </Link>
        </figure>
      </div>

      <div className="image-header">
        <img src={restaurant} alt="restaurant-pic" className="restaurant"></img>
      </div>

      <div className="confirmation-box stack v">
        <h1>Your reservation is confirmed</h1>
        <h2>Date: {userInfo.Date}</h2>
        <h2>Time: {userInfo.Time}</h2>
        <h2>Number of Guests: {userInfo.Number}</h2>
        <h2>Occassion: {userInfo.Occasion}</h2>
      </div>
      <style jsx>{`
        .form-header {
          align-items: center;
          justify-content: space-evenly;
        }
        .booking-header {
          margin-bottom: 1rem;
          font-family: Karla;
          font-weight: 400;
          font-size: 50px;
          color: #f4ce14;
          line-height: 0.4;
          text-align: left;
        }
        .booking-subheader {
          font-weight: 300;
          font-size: 30px;
          color: black;
          line-height: 1;
        }

        .logo-home {
          width: 50px;
          height: 50px;
        }
        .image-header img {
          margin-bottom: 3rem;
          width: 100%;
          height: 45vh;
        }
        .restaurant {
          object-fit: cover;
        }
        .confirmation-box {
          margin: 0 auto;
          width: 60%;
          height: 40vh;
          background-color: #495e57;
          justify-content: center;
          align-items: center;
          color: white;
          margin-bottom: 2rem;
        }
        .confirm-sentence {
          width: 30%;
          font-size: 24px;
        }

        @media (max-width: 768px) {
          .confirmation-box {
            width: 100%;
            height: 50vh;
          }
        }
      `}</style>
    </>
  );
}
