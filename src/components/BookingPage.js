import BookingForm from "./BookingForm";
import Logo from "../assets/Logo.svg";
import homeicon from "../assets/homeicon.svg";
import { Link } from "react-router";

export default function BookingPage({ availableTimes, dispatch, props }) {
  return (
    <>
      <div className="form-page-container">
        <div className="form-header stack h">
          <figure>
            <img className="logo" src={Logo} alt="Little Lemon Logo"></img>
          </figure>
          <div className="header-div">
            <h2 className="booking-header">Little Lemon</h2>
            <h2 className="booking-subheader">Chicago</h2>
          </div>

          <figure>
            <Link to="/">
              <img className="logo-home" src={homeicon} alt="Home icon"></img>
            </Link>
          </figure>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>

      <style jsx>{`
        .form-page-container {
          padding: 3rem 2rem;
          font-family: "Karla", sans-serif;
          color: #edefee;
        }
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
      `}</style>
    </>
  );
}
